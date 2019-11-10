import Soul from "./Soul";
import Person from "./Person";

export default class Group extends Soul {
  ways: number = 0;
  people: number = 0;

  bind(other: Soul, kind: number) {
    if(!this.bonds[other.id]){
      if (other.isWay) this.ways ++;
      if (other.isPerson) this.people ++;  
    }

    this.bonds[other.id] = kind;
  }

  bondWeight(other: Soul, value: number) {
    if (other.isWay) {
      return value / this.ways * 20;
    }
    if (other.isPerson) {
      return other.alive?value / this.people:0;
    }
    return value;
  }

  get isGroup(){
    return true;
  }

}
