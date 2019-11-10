import { h, hydrate } from "preact";
import Person from "./Person";
import { random } from "./util";
import Soul from "./Soul";
import Way from "./Way";
import World from "./World";
import Heritage from "./Heritage";
import Memory from "./Memory";

const skintones = [
  "",
  "\u{1f3fb}",
  "\u{1f3fc}",
  "\u{1f3fd}",
  "\u{1f3fe}",
  "\u{1f3ff}"
];

export const genders = ["", "\u2642", "\u2640"];
export const maleFemale = ["", "\u{1f468}", "\u{1f469}"];

export const emojis: { [key: string]: string } = {};
for (let [k, v] of Object.entries(setting.skills as any).concat(
  Object.entries(setting.careers)
)) {
  emojis[k] = v[0];
}

console.log(emojis);

export function face(p: Person) {
  const race = setting.races[p.race];
  if (race.length == 1) {
    if (p.race == 0)
      return maleFemale[p.gender] + skintones[p.skintone] + "\u200D" + race[0];
    return race[0] + skintones[p.skintone] + "\u200D" + genders[p.gender];
  } else {
    return race[p.gender] + skintones[p.skintone];
  }
}

export function emoji(s: string, ref: string) {
  return (
    <a href={ref} class="emoji">
      {s}
    </a>
  );
}

export function emojiSmall(s, ref: string) {
  return (
    <a href={ref} class="emoji-small">
      {s}
    </a>
  );
}

export function traijiStack(s, n) {
  return s.repeat ? (
    <span class="emoji-trait">
      <span class="trail">{s.repeat(n - 1)}</span>
      <span class="head">{s}</span>
    </span>
  ) : (
    ""
  );
}

export function traiji(s: Way, n = 1) {
  return (
    <a href={s.ref} class="traiji">
      <span class="emoji-trait" style={n != 1 && "letter-spacing: -12px;"}>
        {s.emoji}
      </span>
      {n != 1 && <span class="emoji-number">{n}</span>}
    </a>
  );
}

export function personCard(p: Person) {
  let r = random(p.id + 10);
  let personRef = "#person-" + p.id + "-" + p.dashedName;
  let style = `filter: hue-rotate(${25 - (r() % 50)}deg) contrast(${70 +
    (r() % 60)}%) saturate(${70 + (r() % 60)}%);`;
  return (
    <div class="card">
      <a href={personRef} style={style} class="text-ref">
        {emoji(face(p), p.ref)}
      </a>
      <a href={personRef} class="text-ref">
        {p.name.split("\t").map(s => (
          <div>{s}</div>
        ))}
      </a>
    </div>
  );
}

export function personCard2(p: Person) {
  let r = random(p.id + 10);
  let style = `filter: hue-rotate(${25 - (r() % 50)}deg) contrast(${70 +
    (r() % 60)}%) saturate(${70 + (r() % 60)}%);`;
  return (
    <div class="card">
      <a href={p.ref} style={style} class={"emoji " + (p.alive ? "" : "dead")}>
        {face(p)}
      </a>
      <div style="margin-left:5px;">
        <div>
          <a href={p.ref} class="text-ref">
            {p.title}
          </a> {p.alive ? p.age + "y." : p.created + "-" + p.died}
        </div>
        {ways(p)}
      </div>
    </div>
  );
}

export function wayCard(w: Way) {
  return (
    <div class="card">
      {emoji(w.emoji, w.ref)}
      <div>
        <a href={w.ref} class="text-ref">
          {w.name}
        </a>
        <div>{w.base && w.base.map(b => emojiSmall(b.emoji, b.ref))}</div>
      </div>
    </div>
  );
}

function ways(s: Soul) {
  return (
    <div>
      {Object.entries(s.way)
        .sort((a, b) => (b[1] as number) - (a[1] as number))
        .map(([k, v]) => traiji(s.world.way[k], v))}
    </div>
  );
}

export function heritageCard(ht: Heritage) {
  return (
    <div class="card">
      <a href={ht.ref} class="emoji-medium heritage">
        <div class="heritage-title">{ht.creator.name}</div>
        {ht.field.emoji}
      </a>
      <div>
        <div>
          {soulRef(ht)} {ht.created}
        </div>
        {ways(ht)}
      </div>
    </div>
  );
}

export function soulCard2(s: Soul) {
  if (s instanceof Person) return personCard2(s);
  else if (s instanceof Way) return wayCard(s);
  else if (s instanceof Heritage) return heritageCard(s);
  else
    return (
      <a class="card" href={s.ref}>
        {s.name || "Unknown"}
      </a>
    );
}

export function listAllSkills(world: World) {
  return (
    <span>
      {Object.keys(setting.skills as any)
        .concat(Object.keys(setting.careers))
        .map(k => wayCard(world.way[k]))}
    </span>
  );
}

export function soulRef(soul: Soul) {
  if (!soul) return "";
  if(soul instanceof Heritage){
    return <span><a href={soul.ref} class="text-ref">{soul.title}</a> by {soulRef(soul.creator)}</span>
  }
  return (
    <a href={soul.ref} class="text-ref">
      {soul.title}
    </a>
  );
}

export function dead(e: h.JSX.Element) {
  return <span class="dead">e</span>;
}

function advanced(way:Soul):h.JSX.Element{
  if(way instanceof Way){
    if(way.isCareer)
      return <span>Advanced as {soulRef(way)}</span>
    else
      return <span>Learned {soulRef(way)}</span>
  } else {
    return <span>Studied {soulRef(way)}</span>
  }
}

function interest(way:Soul):h.JSX.Element{
  return <span>interest in {soulRef(way)} {(way as Way).isCareer?" career":""}</span>
}


export function memoryLine(subject:Soul, m: Memory) {
  let text: h.JSX.Element;

  if(subject.isHeritage){
    if(m.medium.isPerson)
      text = <span>Helped {soulRef(m.object)} to meet {soulRef(m.medium)}</span>
    else
      text = <span>Helped {soulRef(m.object)} {(m.medium as Way).isCareer?"to be better":"to learn"} {soulRef(m.medium)}</span>
  } else {
    switch (m.kind) {
      case Memory.DIED:
        text = <span>Died</span>;
        break;
      case Memory.CAREER_CHOSEN:
        text = <span>Will be a {soulRef(m.object)}</span>;
        break;
      default:
        if (m.medium.isGroup && !m.medium.isWay) {
          if (m.object.isPerson)
            text = <span>Met {soulRef(m.object)}</span>;
          else if (m.object.isWay)
            text = <span>{advanced(m.object)}</span>;
        } else if (m.medium.isWay && m.object.isWay){
          if(m.medium == m.object)
            text = <span>{advanced(m.object)}</span>;
          else
            text = <span>{advanced(m.object)} because of the {interest(m.medium)}  </span>;
        } else if (m.medium.isWay && m.object.isHeritage){
          text = <span>Studied {soulRef(m.object)} because of the {interest(m.medium)}</span>;
        } else if ((m.medium.isPerson || m.medium.isHeritage) && m.object.isWay){
          text = <span>{advanced(m.object)} with the help of {soulRef(m.medium)}</span>;
        } else if ((m.medium.isWay || m.medium.isHeritage) && m.object.isPerson){
          text = <span>Met {soulRef(m.object)} because of the common {interest(m.medium)}</span>;
        } else if (m.medium.isPerson && m.object.isPerson){
          text = <span>Was introduced to {soulRef(m.object)} by {soulRef(m.medium)}</span>;
        } else if (m.medium.isPerson && m.object.isHeritage){
          text = <span>{advanced(m.object)} by recomendation of {soulRef(m.medium)}</span>;
        } else {
          text = (
            <span>
              {soulRef(m.medium)} {soulRef(m.object)} {m.kind ? m.kind : ""}
            </span>
          );
        }
    }
  }

  return (
    <div style="white-space: nowrap;">
      {m.year}. {text}
    </div>
  );
}
