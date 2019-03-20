import React, { Component } from "react";
import "./CreateCharacter.scss";
import Strike from "../../assets/images/Strike.png";
import EnchantedStrike from "../../assets/images/EnchantedStrike.PNG";
import Heal from "../../assets/images/HealingTransparent.png";
import ShieldBlock from "../../assets/images/shieldTransparent.png";
import knightPortrait from "../../assets/images/knightTransparent.png";
import wizardPortrait from "../../assets/images/femaleWizard.jpg";
import MenuSelection from "../../assets/audio/menuSelection.mp3";

var menuSelectionAudio = new Audio(MenuSelection);

class CreateCharacter extends Component {
  state = {
    chosenCharacter: "",
    charactersArray: ["wizard", "knight"]
  };

  chosenCharHandler = char => {
    this.setState({
      chosenCharacter: char
    });
  };

  playAudio = () => {
    menuSelectionAudio.play();
  };
  render() {
    let charPortrait;
    var characterImagesArray = this.state.charactersArray.map(charImage => {
      console.log(charImage);
      switch (charImage) {
        case "wizard":
          charPortrait = wizardPortrait;
          break;
        case "knight":
          charPortrait = knightPortrait;
      }
      if (this.state.chosenCharacter === charImage) {
        return (
          <div className="col-sm-4 text-center">
            <div
              className="createCharacter__content__preference--active"
              onClick={() => {
                this.chosenCharHandler(charImage);
                this.playAudio();
              }}
            >
              <img src={charPortrait} />
            </div>
          </div>
        );
      } else {
        return (
          <div className="col-sm-4 text-center">
            <div
              className="createCharacter__content__preference"
              onClick={() => {
                this.chosenCharHandler(charImage);
                this.playAudio();
              }}
            >
              <img src={charPortrait} />
            </div>
          </div>
        );
      }
    });

    // let abilityImageArray = [];

    // let abilitySelection = this.props.abilityChooseArray.map(
    //   (ability, index) => {
    //     // const abilityToolTipParsed = ability.trueAbility.tooltip;
    //     switch (ability.abilityImage) {
    //       case "Strike":
    //         abilityImageArray.push(Strike);
    //         break;
    //       case "EnchantedStrike":
    //         abilityImageArray.push(EnchantedStrike);
    //         break;
    //       case "Heal":
    //         abilityImageArray.push(Heal);
    //         break;

    //       case "ShieldBlock":
    //         abilityImageArray.push(ShieldBlock);
    //         break;

    //       default:
    //         abilityImageArray.push("");
    //         break;
    //     }
    //     return (
    //       <div className="col-sm-3" key={ability.abilityImage}>
    //         <button className="createCharacter__content__slots">
    //           <img src={abilityImageArray[index]} className="" alt="ability" />
    //         </button>
    //       </div>
    //     );
    //   }
    // );

    return (
      <>
        <div className="createCharacter">
          <h3 className="createCharTitle">Who Are You?</h3>
          <div className="createCharacter__content">
            <div className="row">
              <div className="col-sm-12 text-center">
                <div className="row">
                  {characterImagesArray}
                  {/* {abilitySelection} */}
                  <div className="col-sm-12 text-center">
                    <div
                      className="createCharacter__content__beginGame"
                      onClick={() => {
                        this.props.characterCreationHandler(
                          this.state.chosenCharacter
                        );
                      }}
                    >
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
