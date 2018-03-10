import React, { Component } from 'react';
import uuid from 'uuid/v4';
import Die from './Die';
import Navigation from './functional/Navigation';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      soundOn: true,
      dice: ['initial&20&inverted'],
      menuOpen: false,
      showTotal: false,
      total: null,
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
        <div className={"total-panel" + (this.state.showTotal ? "" : " hide")}>
          Total: <span>{this.state.total}</span>
        </div>
        <Navigation
          addOne={this._addOne.bind(this)}
          addMany={this._addMany.bind(this)}
          rollAll={this._rollAll.bind(this)}
          toggleSound={this._toggleSound.bind(this)}
          toggleMenu={this._toggleMenu.bind(this)}
          toggleTotal={this._toggleTotal.bind(this)}
          setMenu={this._setMenu.bind(this)}
          soundOn={this.state.soundOn}
          menuOpen={this.state.menuOpen}
          clearDice={this._clearDice.bind(this)}
        />
      </div>
    );
  }

  _addOne(die) {
    const output = this.state.dice || [];
    if (typeof die === 'object') {
      output.push(uuid() + '&' + die.sides + '&' + (die.style ? die.style : 'classic'));
    }
    if (typeof die === 'number') {
      output.push(uuid() + '&' + die + '&classic');
    }
    this.setState({ dice: output });
  }

  _addMany(diceArray) {
    const output = [];
    diceArray.forEach(die => {
      output.push(uuid() + '&' + die.sides + '&' + (die.style ? die.style : 'classic'));
    })
    this.setState({ dice: output });
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

  _toggleTotal() {
    this.setState({ showTotal: !this.state.showTotal });
  }

  _setMenu(bool) {
    this.setState({ menuOpen: bool });
  }

  _rollAll() {
    let total = 0;
    this.state.dice.forEach(id => {
      const roll = this[id]._handleRoll();
      total += roll;
    })
    this.setState({ total });
  }
}

export default App;
