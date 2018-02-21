import React, { Component } from 'react';
import uuid from 'uuid/v4';
import Die from './Die';
import Navigation from './functional/Navigation';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      soundOn: false,
      dice: [{ id: 'initial', sides: 20 }],
      menuOpen: false,
    };

    this._addDie = this._addDie.bind(this);
  }
  render() {
    const diceArray = this.state.dice.map((die, index) => (
      <Die
        key={die.id}
        sides={die.sides}
        dieId={die.id}
        removeDie={this._removeDie.bind(this)}
        changeSides={this._changeSides.bind(this)}
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
          toggleMenu={this._toggleMenu.bind(this)}
          soundOn={this.state.soundOn}
          menuOpen={this.state.menuOpen}
        />
      </div>
    );
  }

  _addDie(sides) {
    const diceArray = this.state.dice || [];
    sides.forEach(num => {
      const newDie = {
        id: uuid(),
        sides: num,
      };
      diceArray.push(newDie);
    })
    this.setState({ dice: diceArray });
  }

  _changeSides(id, sides) {
    const diceArray = this.state.dice || [];
    const index = diceArray.findIndex(die => die.id === id);
    diceArray[index] = { id, sides };
    this.setState({ dice: diceArray });
  }

  _removeDie(id) {
    const filteredArray = this.state.dice.filter(die => die.id !== id);
    this.setState({ dice: filteredArray });
  }

  _toggleSound() {
    this.setState({ soundOn: !this.state.soundOn });
  }

  _toggleMenu() {
    this.setState({ menuOpen: !this.state.menuOpen });
  }
}

export default App;
