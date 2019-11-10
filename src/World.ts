import { random, weightedRandom } from "./util";
import Namer from "./Namer";
import Way from "./Way";
import Person from "./Person";
import Soul from "./Soul";
import Group from "./Group";

export default class World {
  rni = random(1);
  namer = new Namer(this.rni);
  way: { [key: string]: Way } = {};
  people: Person[] = [];
  lastId = 0;
  year = 1000;
  careerFrequency: number[];
  souls: Soul[] = [];
  human: Group;
  races: Group[] = [];
  culture: Group;

  careers: Way[];
  skills: Way[];

  register(soul: Soul) {
    soul.id = this.nextId();
    this.souls[soul.id] = soul;
  }

  heritageName(way:Way){
    return setting.careers[way.name][3]
  }

  constructor() {

    let waysSrc = Object.entries(setting.skills as any).concat(
      Object.entries(setting.careers)
    );

    this.careerFrequency = Object.values(setting.careers).map(
      v => v[2] || 1
    ) as number[];

    for (let [k, v] of waysSrc) {
      let way = new Way(this, k, k in setting.careers, v[0]);
      this.way[k] = way;
    }

    for (let [k, v] of waysSrc) {
      if (v[1])
        for (let subSkill of v[1]) this.way[k].base.push(this.way[subSkill]);
    }

    for (let way of Object.values(this.way)) way.findRelated();

    for (let way of Object.values(this.way)) way.deepExpandRelated();

    for (let way of Object.values(this.way)) way.linkWay();

    this.careers = Object.values(this.way).filter(w => w.isCareer);
    this.skills = Object.values(this.way).filter(w => !w.isCareer);

    this.human = new Group(this);
    for (let way of ["fitness", "logic", "charisma"]) this.human.setWay(way, 1);
    this.human.name = "Human";

    this.culture = new Group(this);
    this.culture.name = "culture";
    for(let wayName in this.way){
      this.culture.way[wayName] = 5;
    }

    for(let raceInd in setting.races){
      let race = new Group(this);
      race.name = "race\t" + raceInd;
      this.races[raceInd] = race;
    }

    let lastYear = this.year + 120;
    for (; this.year < lastYear ; this.year++) {
      for (let i = 0; i < 5; i++){
        new Person(this);
      }
  
      for (let p of this.people) {
        p.live();
      }
    }
  }

  nextId() {
    return ++this.lastId;
  }

  randomCareer() {
    let wr = weightedRandom(this.careerFrequency, this.rni);
    return Object.keys(setting.careers)[wr];
  }

}
