import lang from "./lang";
import {shuffle} from "./util"

export default class Namer {
  names: string[][] = [];
  shuffled: string[][] = [[], [], []]; //avoiding repeated (sur)names

  static SURNAME = 0;
  static MALE = 1;
  static FEMALE = 2;
  static MALEFULL = [Namer.MALE, Namer.SURNAME];
  static FEMALEFULL = [Namer.FEMALE, Namer.SURNAME];

  constructor(public rni: () => number) {
    for (let kind of ["surnames", "maleNames", "femaleNames"]) {
      let all: string = lang[kind];
      let split = all.split(" ").map(s => s[0].toUpperCase() + s.substr(1));
      this.names.push(split);
    }
  }

  next(kind: number | number[]) {
    if (typeof kind == "number") {
      if(this.shuffled[kind].length==0)
        this.shuffled[kind] = shuffle(this.names[kind].slice(), this.rni)
      return this.shuffled[kind].pop();
    } else {
      return kind.map(i => this.next(i)).join("\t");
    }
  }
}
