import Soul from "./Soul";

export default class Memory {
  static readonly CAREER_CHOSEN = 2;
  static readonly DIED = 3;
  static readonly SKILL_CAP = 4;
  static readonly BREAKTHROUGH = 5;

  constructor(
    public year: number,
    public medium: Soul,
    public object: Soul,
    public kind: number = 0
  ) {}
}
