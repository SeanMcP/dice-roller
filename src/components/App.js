import React, { Component } from 'react';
import uuid from 'uuid/v4';
import Die from './Die';
import Navigation from './functional/Navigation';
import Modal from './functional/Modal';
import SettingsMenu from './functional/SettingsMenu';
import CreateMenu from './CreateMenu';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      soundOn: false,
      dice: ['initial&20&inverted'],
      modal: 'none',
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
        playSound={this._playSound.bind(this)}
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
        <div className={"sound-indicator" + (this.state.soundOn ? "" : " hide")}>
          <i className="material-icons md-24">
            {this.state.soundOn ? 'volume_up' : 'volume_off'}
          </i>
        </div>
        <Navigation
          addMany={this._addMany.bind(this)}
          addOne={this._addOne.bind(this)}
          rollAll={this._rollAll.bind(this)}
          setModal={this._setModal.bind(this)}
        />
        <Modal
          modalState={this.state.modal}
          setModal={this._setModal.bind(this)}
        >
          {this._renderModalContent()}
        </Modal>
        <audio ref={ref => this.audio = ref} src="./audio/roll.wav"/>
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
    this.setState({ dice: output, modal: 'none' });
  }

  _addMany(diceArray) {
    const output = [];
    diceArray.forEach(die => {
      output.push(uuid() + '&' + die.sides + '&' + (die.style ? die.style : 'classic'));
    })
    this.setState({ dice: output, modal: 'none' });
  }

  _removeDie(id) {
    const filteredArray = this.state.dice.filter(storeId => storeId !== id);
    this.setState({ dice: filteredArray, modal: 'none' });
  }

  _clearDice() {
    this.setState({ dice: [], modal: 'none' });
  }

  _toggleSound() {
    this.setState({ soundOn: !this.state.soundOn, modal: 'none' });
  }

  _setModal(string) {
    this.setState({ modal: string });
  }

  _toggleTotal() {
    this.setState({ showTotal: !this.state.showTotal, modal: 'none' });
  }

  _renderModalContent() {
    const hash = {
      settings: (
        <SettingsMenu
          clearDice={this._clearDice.bind(this)}
          toggleSound={this._toggleSound.bind(this)}
          toggleTotal={this._toggleTotal.bind(this)}
        />
      ),
      create: (
        <CreateMenu
          addOne={this._addOne.bind(this)}
          addMany={this._addMany.bind(this)}
        />
      )
    }

    return hash[this.state.modal];
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
    this._playSound();
  }

  _playSound() {
    if (this.state.soundOn) {
      this.audio.play();
    }
  }
}

export default App;
