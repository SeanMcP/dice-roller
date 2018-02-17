import React, { Component } from 'react';
// import PropTypes from 'prop-types';
import DieScreen from './functional/DieScreen';

class Die extends Component {
  constructor(props) {
    super(props);

    this.state = {
      sides: 20,
    };
  }
  render() {
    return (
      <div className="die">
        <DieScreen
          handleChange={this._handleChange.bind(this)}
          handleInput={this._handleInput.bind(this)}
          value={this.state.sides}
        />
      </div>
    );
  }

  _handleChange(change) {
    this.setState({ sides: this.state.sides + change})
  }

  _handleInput(event) {
    this.setState({ sides: Number(event.target.value) });
  }
};

// Die.propTypes = {
//
// };

export default Die;
