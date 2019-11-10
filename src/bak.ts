import World from "./World";
import Person from "./Person";
import { emoji, face } from "./ui";
import { worker } from "cluster";

function bak(){
  const setting = {
    races:{
      //western: ["", "\u{1f468}", "\u{1f469}"],
      //southern: ["", "\u{1f9d4}", "\u{1f9d5}"],
      western: ["\u{1F4BC}"],
      southern: ["", "\u{1F472}", "\u{1f9d5}"],
      eastern: ["\u{1f473}"],
      northern: ["\u{1f471}"],
      vampire: ["\u{1f9db}"],
      elf: ["\u{1f9dd}"]
      //fairy: ["\u{1f9da}"]
    }
  }
}

const jobs = {
  doctor: "\u{2695}",
  judge: "\u{2696}",
  student: "\u{1F393}",
  teacher: "\u{1F3EB}",
  farmer: "\u{1F33E}",
  cook: "\u{1F373}",
  mechanic: "\u{1F527}",
  engineer: "\u{1F3ED}",
  craftsman: "\u{1F4BC}",
  scientist: "\u{1F52C}",
  technologist: "\u{1F4BB}",
  singer: "\u{1F3A4}",
  artist: "\u{1F3A8}",

  mage: "\u{1F9D9}",
  police: "\u{1F46E}",
  soldier: "\u{1F482}",
  builder: "\u{1F477}",
  clown: "\u{1F939}",

  noble: ["", "\u{1F934}", "\u{1F478}"]
};

function listCompatibility(){
  let world = new World();

  let me = Object.values(world.people)[241];
  let compatibility = (Object.values(world.people).map(person => [
    person,
    me.compatibility(person)
  ]) as [Person, number][]).sort((a, b) => b[1] - a[1]);
  console.log(compatibility);  
}

/*export function worker(jobn, gendern, skinn) {
  const job = jobs[jobn];
  if (jobn == "noble") return job[gendern] + skintones[skinn];
  if (["police", "soldier", "builder", "mage", "clown"].includes(jobn))
    return (
      job +
      skintones[skinn] +
      "\u200D" +
      genders[gendern] 
      //.split("").map(s => s.charCodeAt(0).toString(16))
    );
  else return maleFemale[gendern] + skintones[skinn] + "\u200D" + job;
}
*/

  //render(<div style="display:flex; flex-wrap:wrap;"><ListAllSkills/>{personCard2(me)}{compatibility.slice(0,300).map(c => [personCard2(c[0]), c[1]]).flat()}</div>, div);
  //render(<div style="display:flex; flex-wrap:wrap;"><ListAllSkills/>{personCard2(me)}{Object.values(world.people).slice(0,300).map(c => [personCard2(c)]).flat()}</div>, div);

//  let s = Object.values(world.people).map(p => personCard(p));

/*export function listAll() {
  let s = "";
  for (let gender of [1, 2])
    for (let skintone of [0, 1, 2, 3, 4, 5]) {
      for (let job of Object.keys(setting.jobs)) {
        s += `${emoji(worker(job, gender, skintone), "")} ${job} ${
          ["", "male", "female"][gender]
        } skin${skintone} `;
      }
      for (let race of Object.keys(setting.races)) {
        s += `${emoji(face(race, gender, skintone), "")} ${race} ${
          ["", "male", "female"][gender]
        } skin${skintone} `;
      }
    }
  return s;
}*/

