import Soul from "./Soul";
import Way from "./Way";
import Person from "./Person";
import { capitalise } from "./util";

export default class Heritage extends Soul {
  constructor(public field: Way, public creator: Person) {
    super(field.world);
    this.name = capitalise(field.world.heritageName(field));
    this.created = this.world.year;
    this.setWay(field.name, creator.way[field.name]);
    for (let way of Object.entries(creator.way)) {
      if (this.world.rni() % 2 == 0) {
        this.setWay(way[0], way[1]);
      }
    }
    this.bindBoth(this.world.heritage, 1, 1);
  }

  bondWeight(other: Soul, value: number) {
    if (other.isWay) return 5 * value * (other as Way).importance;
    if (other.isGroup) return 500 * value;
    if (other.isPerson) return other.alive ? 10 * Math.sign(value) : 0;
    return 1;
  }

  secondaryBondWeight(other: Soul, value: number) {
    if (other.isWay) return 50 * value * (other as Way).importance;
    if (other.isGroup) return 50 * value;
    if (other.isPerson) return other.alive ? 20 * Math.sign(value) : 0;
    return 1;
  }

  get isHeritage() {
    return true;
  }

}
