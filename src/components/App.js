import React, { Component } from 'react';
import uuid from 'uuid/v4';
import Die from './Die';
import Navigation from './functional/Navigation';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      soundOn: false,
      dice: [{ id: 'initial', sides: 20, style: "inverted" }],
      menuOpen: false,
    };

  }
  render() {
    const diceArray = this.state.dice.map((die, i) => (
      <Die
        key={die.id}
        die={die}
        removeDie={this._removeDie.bind(this)}
        changeSides={this._changeSides.bind(this)}
        onRef={ref => this[die.id] = ref}
      />
    ));
    console.log('this.refs', this.refs);
    return (
      <div className="app-container">
        <div className="dice-container">
          {diceArray}
        </div>
        <Navigation
          addDie={this._addDie.bind(this)}
          rollAll={this._rollAll.bind(this)}
          toggleSound={this._toggleSound.bind(this)}
          toggleMenu={this._toggleMenu.bind(this)}
          setMenu={this._setMenu.bind(this)}
          soundOn={this.state.soundOn}
          menuOpen={this.state.menuOpen}
          clearDice={this._clearDice.bind(this)}
        />
      </div>
    );
  }

  _addDie(newDie) {
    const diceArray = this.state.dice || [];
    newDie.forEach(die => {
      const newDie = {
        id: uuid(),
        sides: die.sides,
        style: die.style || null,
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

  _clearDice() {
    this.setState({ dice: [] });
  }

  _toggleSound() {
    this.setState({ soundOn: !this.state.soundOn });
  }

  _toggleMenu() {
    this.setState({ menuOpen: !this.state.menuOpen });
  }

  _setMenu(bool) {
    this.setState({ menuOpen: bool });
  }

  _rollAll() {
    this.state.dice.forEach((die, i) => {
      this[die.id]._handleRoll();
    })
  }
}

export default App;
