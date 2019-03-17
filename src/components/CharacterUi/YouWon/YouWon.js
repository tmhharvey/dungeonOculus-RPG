import React, { Component } from "react";
import "./YouWon.scss";

class YouWon extends Component {
  render() {
    return (
      <div className="youWon">
        <div className="youWon__content">
          <div className="row">
            <div className="col-md-12">
              {" "}
              <h3 className="text-center">
                YOU'VE CLEARED THE DUNGEONS AND SAVED THE LAND!
              </h3>
              <div
                className="youWon__content__startGame"
                onClick={this.props.startGame}
              >
                {" "}
                PLAY AGAIN!{" "}
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default YouWon;
