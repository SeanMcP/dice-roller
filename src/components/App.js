import React, { Component } from 'react';
import uuid from 'uuid/v4';
import Die from './Die';
import Navigation from './functional/Navigation';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      soundOn: false,
      dice: ['initial&20&inverted'],
      menuOpen: false,
    };

  }
  render() {
    const diceArray = this.state.dice.map(id => (
      <Die
        key={id}
        id={id}
        removeDie={this._removeDie.bind(this)}
        onRef={ref => this[id] = ref}
      />
    ));
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
      diceArray.push(uuid() + '&' + die.sides + '&' + die.style);
    })
    this.setState({ dice: diceArray });
  }

  _removeDie(id) {
    const filteredArray = this.state.dice.filter(storeId => storeId !== id);
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
    this.state.dice.forEach(id => {
      this[id]._handleRoll();
    })
  }
}

export default App;
