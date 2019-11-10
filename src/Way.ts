import World from "./World";
import Soul from "./Soul";
import Group from "./Group";
import { capitalise } from "./util";

export default class Way extends Group{
  base: Way[] = [];
  related: { [key: string]: number } = {};
  importance: number;

  constructor(
    world: World,
    name: string,
    public isCareer: boolean,
    public emoji: string
  ) {
    super(world)
    this.name = name;
    this.importance = this.isCareer?5:Object.keys(this.bonds).length + 0.1;
  }

  findRelated() {
    if (this.base)
      for (let i = 0; i < this.base.length; i++) {
        let sub = this.base[i];
        let v = Math.ceil(30 / (i + 2));
        this.related[sub.name] = (this.related[sub.name] || 0) + v;
        sub.related[this.name] = (sub.related[this.name] || 0) + v;
      }
  }

  expandRelated() {
    this.way = this.related;
  }

  deepExpandRelated() {
    for (let [k, v] of Object.entries(this.related)) {
      let sub = this.world.way[k];
      for (let [k2, v2] of Object.entries(sub.related)) {
        if(k2 != this.name)
        this.way[k2] = (this.way[k2] || 0) + v * v2;
      }
    }
  }

  linkWay(){
    for (let [k, v] of Object.entries(this.way)) {
      let newV = Math.floor(v/10);
      this.way[k] = newV;
      this.bind(this.world.way[k], newV);
    }
  }

  get ref(){
    return `#${this.isCareer?"career":"skill"}-${this.id}-${this.name}`;
  }
  
  get isWay(){
    return true;
  }

  randomBond():Soul {
    if(this.isCareer)
      return this;
    else {
      return super.randomBond();
    }
  }

  bondWeight(other: Soul, value: number) {
    if (other.isWay) {
      return value / this.ways;
    }
    if (other.isPerson) {
      return other.alive?20 * value / this.people:0;
    }
    if (other.isHeritage) {
      return 10 * value;
    }
    return value;
  }

}
