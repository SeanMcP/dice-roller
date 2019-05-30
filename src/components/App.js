import React, { Component } from "react";
import uuid from "uuid/v4";

import CreateMenu from "./CreateMenu";
import Die from "./Die";
import IconButton from "./functional/IconButton";
import Modal from "./functional/Modal";
import Navigation from "./functional/Navigation";
import SettingsMenu from "./functional/SettingsMenu";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      soundOn: true,
      diceList: [
        this._createDieObject(6, "settlers-red"),
        this._createDieObject(6, "settlers-yellow")
      ],
      modal: "none",
      showTotal: true,
      total: null
    };
  }

  render() {
    return (
      <div className="app-container">
        <div className="dice-container">{this._renderDice()}</div>
        <div className={"total-panel" + (this.state.showTotal ? "" : " hide")}>
          Total: <b>{this.state.total || 12}</b>
        </div>
        <IconButton
          className={"sound-indicator" + (this.state.soundOn ? "" : " hide")}
          label="Toggle sound"
          icon={this.state.soundOn ? "volume_up" : "volume_off"}
          onClick={this._toggleSound}
          size={24}
        />
        <Navigation
          addMany={this._addMany}
          addOne={this._addOne}
          rollAll={this._rollAll}
          setModal={this._setModal}
        />
        <Modal modalState={this.state.modal} setModal={this._setModal}>
          {this._renderModalContent()}
        </Modal>
        <audio ref={ref => (this.audio = ref)} src="./audio/roll.wav" />
      </div>
    );
  }

  _addOne = die => {
    const diceList = [...this.state.diceList];
    let sides, style;
    if (typeof die === "object") {
      sides = die.sides;
      style = die.style;
    }
    if (typeof die === "number") {
      sides = die;
    }
    diceList.push(this._createDieObject(sides, style));
    this.setState({ diceList, modal: "none" });
  };

  _addMany = diceArray => {
    const diceList = [...this.state.diceList];
    diceArray.forEach(die => {
      diceList.push(this._createDieObject(die.sides, die.style));
    });
    this.setState({ diceList, modal: "none" });
  };

  _createDieObject = (sides = 20, style = "classic") => {
    return {
      id: uuid(),
      sides,
      style
    };
  };

  _removeDie = id => {
    const diceList = this.state.diceList.filter(die => die.id !== id);
    this.setState({ diceList, modal: "none" });
  };

  _clearDice = () => {
    this.setState({ diceList: [], modal: "none" });
  };

  _renderDice = () => {
    return this.state.diceList.map(die => (
      <Die
        {...die}
        addOne={this._addOne}
        key={die.id}
        onRef={ref => (this[die.id] = ref)}
        playSound={this._playSound}
        removeDie={this._removeDie}
      />
    ));
  };

  _setModal = string => {
    this.setState({ modal: string });
  };

  _toggleSound = () => {
    this.setState(prevState => ({
      soundOn: !prevState.soundOn,
      modal: "none"
    }));
  };

  _toggleTotal = () => {
    this.setState(prevState => ({
      showTotal: !prevState.showTotal,
      modal: "none"
    }));
  };

  _renderModalContent() {
    const hash = {
      settings: (
        <SettingsMenu
          clearDice={this._clearDice}
          toggleSound={this._toggleSound}
          toggleTotal={this._toggleTotal}
        />
      ),
      create: <CreateMenu addOne={this._addOne} addMany={this._addMany} />
    };

    return hash[this.state.modal];
  }

  _setMenu = bool => {
    this.setState({ menuOpen: bool });
  };

  _rollAll = () => {
    const total = this.state.diceList.reduce((accumulator, { id }) => {
      const roll = this[id]._handleRoll();
      accumulator += roll;
      return accumulator;
    }, 0);
    this.setState({ total });
    this._playSound();
  };

  _playSound = () => {
    if (this.state.soundOn) {
      this.audio.play();
    }
  };
}

export default App;
