import React, { Component } from 'react';
import Navigation from './Navigation'

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      soundOn: false,
    };
  }
  render() {
    return (
      <div className="app-container">
        <Navigation
          addDie={this._addDie.bind(this)}
          toggleSound={this._toggleSound.bind(this)}
          soundOn={this.state.soundOn}
        />
      </div>
    );
  }

  _addDie() {
    console.log('Add die');
  }

  _toggleSound() {
    this.setState({ soundOn: !this.state.soundOn });
  }
}

export default App;
