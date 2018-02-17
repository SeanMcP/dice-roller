import React, { Component } from 'react';
import Die from './Die';
import Navigation from './functional/Navigation';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      soundOn: false,
      dice: [],
    };
  }

  componentDidMount() {
    if (this.state.dice.length === 0) {
      this.setState({ dice: [
        <Die
          key={this.state.dice.length + 1}
          index={this.state.dice.length + 1}
          removeDie={this._removeDie.bind(this)}
        />
      ] });
    }
  }
  render() {
    return (
      <div className="app-container">
        <div className="dice-container">
          {this.state.dice}
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
    diceArray.push(
      <Die
        key={diceArray.length + 1}
        index={diceArray.length + 1}
        removeDie={this._removeDie.bind(this)}
      />
    );
    this.setState({ dice: diceArray });
  }

  _removeDie(index) {
    console.log('_removeDie on App');
    const diceArray = this.state.dice.splice(index, 1);
    this.setState({ dice: diceArray });
  }

  _toggleSound() {
    this.setState({ soundOn: !this.state.soundOn });
  }
}

export default App;
