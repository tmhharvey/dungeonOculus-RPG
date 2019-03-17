import React, { Component } from "react";
import "./CreateCharacter.scss";
import Strike from "../../assets/images/Strike.png";
import EnchantedStrike from "../../assets/images/EnchantedStrike.PNG";
import Heal from "../../assets/images/HealingTransparent.png";
import ShieldBlock from "../../assets/images/shieldTransparent.png";

class CreateCharacter extends Component {
  render() {
    let abilityImageArray = [];

    let abilitySelection = this.props.abilityChooseArray.map(
      (ability, index) => {
        // const abilityToolTipParsed = ability.trueAbility.tooltip;
        switch (ability.abilityImage) {
          case "Strike":
            abilityImageArray.push(Strike);
            break;
          case "EnchantedStrike":
            abilityImageArray.push(EnchantedStrike);
            break;
          case "Heal":
            abilityImageArray.push(Heal);
            break;

          case "ShieldBlock":
            abilityImageArray.push(ShieldBlock);
            break;

          default:
            abilityImageArray.push("");
            break;
        }
        return (
          <div className="col-sm-3" key={ability.abilityImage}>
            <button className="createCharacter__content__slots">
              <img src={abilityImageArray[index]} className="" alt="ability" />
            </button>
          </div>
        );
      }
    );

    return (
      <>
        <div className="createCharacter">
          <div className="createCharacter__content">
            <div className="row">
              <div className="col-sm-12 text-center">
                <h3>Create Your Character!</h3>
                <div className="row">
                  {" "}
                  <div className="col-sm-6 text-center">
                    {" "}
                    <div
                      className="createCharacter__content__preference"
                      onClick={() => {
                        this.props.characterCreationHandler("Wizard");
                      }}
                    >
                      <p>Wizard</p>
                    </div>
                  </div>
                  <div className="col-sm-6 text-center">
                    {" "}
                    <div
                      className="createCharacter__content__preference"
                      onClick={() => {
                        this.props.characterCreationHandler("Knight");
                      }}
                    >
                      <p>Knight</p>
                    </div>
                  </div>
                  {abilitySelection}
                  <div className="col-sm-12 text-center">
                    <div className="createCharacter__content__beginGame">
                      Submit Character
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default CreateCharacter;
