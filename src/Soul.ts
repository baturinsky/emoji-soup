import World from "./World";
import { weightedRandom, capitalise } from "./util";
import Way from "./Way";
import Memory from "./Memory";

export default class Soul {
  id: number;
  name: string;
  way: { [key: string]: number } = {};
  bonds: { [key: number]: number } = {};
  memories: Memory[] = [];
  died = 0;
  created: number;

  static readonly FRIEND = 1;
  static readonly LOVER = 2;
  static readonly RELATIVE = 4;
  static readonly PARENT = 8;
  static readonly CREATOR = 8;
  static readonly CHILD = 16;
  static readonly CREATION = 16;
  static readonly ENEMY = 32;

  get alive(){
    return !this.died;
  }
  
  constructor(public world: World) {
    if (world) world.register(this);
  }

  bindBoth(other: Soul, kind: number, backKind: number) {
    this.bind(other, kind);
    other.bind(this, backKind);
  }

  bind(other: Soul, kind: number) {
    this.bonds[other.id] = kind;
  }
  
  get ref(): string {
    return "#soul-" + this.id;
  }

  randomBondInfluenced(influencer:Soul):Soul {    
    let weights = this.listBonds().map(([s, v]) => Math.min(this.secondaryBondWeight(s, v), 1 + (influencer.bondWeight(s, influencer.bonds[s.id]) || 0)));
    let ind = weightedRandom(weights, this.world.rni);
    return this.bondNumber(ind);
  }

  /*randomBondInfluenced(influencer:Soul):Soul {    
    let weights = this.listBonds().map(([s, v]) => this.bondWeight(s, v) + (influencer.bondWeight(s, influencer.bonds[s.id]) || 0));
    let ind = weightedRandom(weights, this.world.rni);
    return this.bondNumber(ind);
  }*/

  randomBond():Soul {
    let ind = weightedRandom(this.bondWeights(), this.world.rni);
    return this.bondNumber(ind);
  }

  bondNumber(ind: number) {
    return this.world.souls[Object.keys(this.bonds)[ind]];
  }

  listBonds(): [Soul, number][] {
    return Object.entries(this.bonds).map(([key, v]) => [
      this.world.souls[key],
      v
    ]);
  }

  bondWeights() {
    let weights = this.listBonds().map(([s, v]) => this.bondWeight(s, v));
    return weights;
  }

  bondWeight(other: Soul, value: number) {
    return 1;
  }

  advance(skillName: string, n = 1) {
    this.setWay(skillName, (this.way[skillName] || 0) + n);
  }

  setWay(skillName: string, n: number) {
    this.way[skillName] = n;
    this.bindBoth(this.world.way[skillName], n, n);
    //this.bind(this.world.way[skillName], n);
  }

  get isWay(){
    return false;    
  }

  get isGroup(){
    return false;    
  }

  get isPerson(){
    return false;    
  }

  get isHeritage(){
    return false;    
  }

  wayCompatibility(other:Soul):number{
    return Object.entries(this.way).reduce((prev, cur) => prev + (other.way[cur[0]]||0) * cur[1], 0);
  }

  secondaryBondWeight(other: Soul, value: number) {
    return this.bondWeight(other, value);
  }

  get age() {
    return this.world.year - this.created;
  }

  get title(){
    return capitalise(this.name.replace("\t", " "))
  }
}
