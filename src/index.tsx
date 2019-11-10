import { h, render, Component } from "preact";

import { listAllSkills, soulCard2, soulRef, memoryLine } from "./ui";
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
    if (current) this.setState({ current: current });
  };

  render() {
    return (
      <div>
        {/*listAllSkills(world)*/}
        <div class="head">{soulCard2(this.state.current)}</div>
        <div class="horisontal">
          {this.state.current.memories &&
            this.state.current.memories.length > 0 && (
              <div>
                <h4>History</h4>
                {this.state.current.memories.map(m => memoryLine(this.state.current, m))}
              </div>
            )}
          <div>
            <h4>Contacts</h4>
            <div class="bonds">
              {this.state.current
                .listBonds()
                .sort((a, b) => b[1] - a[1])
                .filter(c => !c[0].isWay)
                .map(c => [soulCard2(c[0])])}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

window.onload = function() {
  render(<UI />, document.getElementById("main"));
};
