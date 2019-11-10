import { h, render, Component } from "preact";

import { listAllSkills, soulCard, soulRef, memoryLine } from "./ui";
import Person from "./Person";
import World from "./World";
import Soul from "./Soul";

let world = new World();

/*let current: Soul = Object.values(world.people)[241];
console.log(current);*/

class UI extends Component {
  state = { current: world.human as Soul };

  constructor() {
    super();

    window.onhashchange = this.checkHash;
    this.checkHash();
  }

  checkHash = () => {
    let hash = document.location.hash.replace("%20", " ");
    let current: Soul = world.souls[hash.split("-")[1]];
    console.log(current);
    if (current) this.setState({ current: current });
  };

  advance(years: number) {
    world.advance(years);
    this.setState({ world });
  }

  render() {
    let soul = this.state.current;
    return (
      <div>
        {/*listAllSkills(world)*/}
        <div class="menu">
          Year: {world.year}
          <button onClick={e => this.advance(1)}>+1 year</button>
          <button onClick={e => this.advance(10)}>+10 years</button>
          <div class="spacer"></div>
          <div>
            {soulRef(world.heritage)} (
            {Object.values(world.heritage.bonds).length}) {soulRef(world.human)}{" "}
            ({Object.values(world.human.bonds).length})
          </div>
        </div>
        <div class="current-title">{soulCard(soul)}</div>
        <div class="horisontal">
          {soul.memories && soul.memories.length > 0 && (
            <div>
              <h4>{soul.isPerson ? "Biography" : "History"}</h4>
              {soul.memories.map(m => memoryLine(soul, m))}
            </div>
          )}
          <div>
            <h4>Relations</h4>
            <div class="bonds">
              {soul
                .listBonds()
                .sort((a, b) => b[1] - a[1])
                .filter(c => !c[0].isWay)
                .map(c => [soulCard(c[0])])}
            </div>
          </div>
          {Object.values(soul.way).length > 0 && (
            <div>
              <h4>Skills</h4>
              <div class="bonds">
                {Object.entries(soul.way)
                  .sort((a, b) => b[1] - a[1])
                  .map(c => [soulCard(world.way[c[0]], c[1])])}
              </div>
            </div>
          )}
        </div>
      </div>
    );
  }
}

window.onload = function() {
  render(<UI />, document.getElementById("main"));
};
