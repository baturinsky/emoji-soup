import World from "./World";
import Namer from "./Namer";
import { randomElement, weightedRandom, shuffle } from "./util";
import Way from "./Way";
import Soul from "./Soul";
import Memory from "./Memory";
import Heritage from "./Heritage";

export default class Person extends Soul {
  gender: number;
  race: number;
  skintone: number;
  career: Way;  

  constructor(world: World) {
    super(world);
    const rni = world.rni;
    this.gender = (rni() % 2) + 1;
    this.race = rni() % 6;
    this.skintone = rni() % 6;
    this.name = world.namer.next(
      this.gender == 1 ? Namer.MALEFULL : Namer.FEMALEFULL
    );
    this.created = world.year;
    this.bindBoth(this.world.human, 1, 1);
    this.bindBoth(this.world.races[this.race], 1, 1);
    this.world.people.push(this);
  }

  get dashedName() {
    return this.name.replace("\t", "-");
  }

  skill(skillName: string) {
    return this.way[skillName] || 0;
  }

  compatibility(other: Person) {
    let n = 0;
    if (other.gender == this.gender) n += 10;
    if (other.race == this.race) n += 5;
    if (other.skintone == this.skintone) n += 3;
    for (let skillName in this.way) {
      n += this.way[skillName] * other.way[skillName] || 0;
    }
    let related = this.bonds[other.id];
    if (related) {
      if (related & Soul.FRIEND) n += 50;
      if (related & Soul.LOVER) n += 50;
      if (related & Soul.ENEMY) n -= 30;
    }
    for (let relation in this.bonds) {
      if (relation in other.bonds) {
        let match = this.bonds[relation] & other.bonds[relation];
        if (match) n += 10;
      }
    }

    n -= Math.abs(this.age - other.age);

    return n;
  }

  gainFriends() {
    let selection = shuffle(this.world.people, this.world.rni).slice(0, 30);
    let comp = selection.map(p =>
      p == this ? 0 : Math.max(0.1, this.compatibility(p))
    );
    let newFriendI = weightedRandom(comp, this.world.rni);
    let newFriend = selection[newFriendI];
    this.bindBoth(newFriend, Soul.FRIEND, Soul.FRIEND);
  }

  get ref() {
    return "#person-" + this.id + "-" + this.dashedName;
  }

  bind(other: Soul, kind: number) {
    this.bonds[other.id] = (this.bonds[other.id] || 0) | kind;
  }

  live(medium?: Soul) {
    if (!this.alive) return;

    if(this.world.rni()%3000 < this.age){
      this.died = this.world.year;
      this.memories.push(new Memory(this.world.year, null, null, Memory.DIED));      
      return;
    }

    if(this.world.rni()%100 < this.age)
      return;

    if (this.age >= 10 && !this.career) this.chooseCareer();

    /*if (this.world.rni() % 6 == 0) {
      this.liveCareer();
      return;
    }*/

    if (!medium) medium = this.randomBond();
    let newBond = medium.randomBondInfluenced(this);

    if (newBond.isWay) {
      this.liveWay(medium, newBond as Way);
    } else if (newBond.isPerson && newBond != this) {
      if (this.bound(newBond)) {
        this.live(newBond);
      } else {
        this.liveFriend(medium, newBond as Person);
      }
    } else if (newBond.isHeritage){
      this.liveHeritage(medium, newBond as Heritage);
    } else {
      this.liveCareer();
    }
  }

  bound(soul: Soul) {
    return this.bonds[soul.id];
  }

  liveFriend(medium: Soul, friend: Person) {
    this.bindBoth(friend, Soul.FRIEND, Soul.FRIEND);
    this.memories.push(new Memory(this.world.year, medium, friend));
    friend.memories.push(new Memory(this.world.year, medium, this));
  }

  liveHeritage(medium: Soul, heritage: Heritage) {
    this.bindBoth(heritage, 1, 1);
    this.memories.push(new Memory(this.world.year, medium, heritage));
    heritage.memories.push(new Memory(this.world.year, medium, this));
  }

  liveCareer() {
    if (!this.career) this.chooseCareer();
    if (!this.career) return;
    this.liveWay(this.career, this.career);
  }

  liveWay(medium: Soul, way: Way) {
    let wayFollowed = this.chooseAdvance(way);
    let wayName = wayFollowed.name;
    let skillCap = this.world.culture.way[wayName];
    let currentLevel = this.way[wayName] || 0;
    if(currentLevel < skillCap){
      this.setWay(wayName, (this.way[wayName] || 0) + 1);
      this.memories.push(new Memory(this.world.year, medium, wayFollowed));
    } else {
      //let breakthrough = this.world.rni()%3 == 0;
      let breakthrough = true;
      
      if(breakthrough){
        if(wayFollowed.isCareer){
          let heritage = this.createHeritage(wayFollowed)
          this.memories.push(new Memory(this.world.year, wayFollowed, heritage, Memory.BREAKTHROUGH));
        }
        this.world.culture.way[wayName]++;
      } else {
        this.memories.push(new Memory(this.world.year, medium, wayFollowed, Memory.SKILL_CAP));
      }
    }        
  }

  createHeritage(way:Way):Heritage{
    let h = new Heritage(way, this);
    return h;
  }

  chooseCareer() {
    let ind = weightedRandom(
      this.world.careers.map(c => this.wayCompatibility(c)),
      this.world.rni
    );
    let career = this.world.careers[ind];
    this.career = career;
    if(career)
    this.memories.push(
      new Memory(this.world.year, null, career, Memory.CAREER_CHOSEN)
    );
  }

  get isPerson() {
    return true;
  }

  chooseAdvance(skill: Way): Way {
    if (skill.base.length == 0) {
      return skill;
    }

    let r = this.world.rni;
    let bestRoll = (r() % 6) + this.skill(skill.name);
    let bestSkill = skill;
    for (let i = 0; i < skill.base.length; i++) {
      let roll = (r() % 6) + this.skill(skill.base[i].name) + i * 2 + 2;
      if (roll < bestRoll) {
        bestSkill = skill.base[i];
      }
    }
    if (bestSkill == skill) {
      return skill;
    }
    return this.chooseAdvance(bestSkill);
  }

  bondWeight(other: Soul, value: number) {
    if (other.isWay) return 5 * value * (other as Way).importance;
    if (other.isGroup) return 20 * value;
    if (other.isPerson) return other.alive?10 * Math.sign(value):0;
    if (other.isHeritage) return 50 * value;
    return 0;
  }

  secondaryBondWeight(other: Soul, value: number) {
    if (other.isWay) return 100 * value * (other as Way).importance;
    if (other.isGroup) return 50 * value;
    if (other.isPerson) return other.alive?10 * Math.sign(value):0;
    if (other.isHeritage) return 50 * value;
    return 0;
  }

}
