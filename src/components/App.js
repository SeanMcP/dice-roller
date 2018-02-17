import React, { Component } from 'react';
import uuid from 'uuid/v4';
import Die from './Die';
import Navigation from './functional/Navigation';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      soundOn: false,
      dice: ['initial'],
    };

    this._addDie = this._addDie.bind(this);
  }
  render() {
    const diceArray = this.state.dice.map((uuid, index) => (
      <Die
        key={uuid}
        index={index}
        removeDie={this._removeDie.bind(this)}
      />
    ));
    return (
      <div className="app-container">
        <div className="dice-container">
          {diceArray}
        </div>
        <Navigation
          addDie={this._addDie.bind(this)}
          toggleSound={this._toggleSound.bind(this)}
          soundOn={this.state.soundOn}
        />
      </div>
    );
  }

  _addDie() {
    const diceArray = this.state.dice || [];
    diceArray.push(uuid());
    this.setState({ dice: diceArray });
  }

  _removeDie(index) {
    const filteredArray = this.state.dice.filter((die, i, diceArray) => i !== index);
    this.setState({ dice: filteredArray });
  }

  _toggleSound() {
    this.setState({ soundOn: !this.state.soundOn });
  }
}

export default App;
