import React, { Component } from 'react';
import PropTypes from 'prop-types';
import DieScreen from './functional/DieScreen';
import { randomRoll } from '../utils/';

class Die extends Component {
  constructor(props) {
    super(props);

    this.state = {
      sides: 20,
      roll: null,
      special: null,
    };
  }
  render() {
    const special = this.state.special;
    return (
      <div className={special ? "die " + special : "die"}>
        <DieScreen
          handleChange={this._handleChange.bind(this)}
          handleInput={this._handleInput.bind(this)}
          handleRemove={this._handleRemove.bind(this)}
          value={this.state.sides}
        />
        <div
          className="die-roll click center"
          onClick={this._handleRoll.bind(this)}
        >
          {this.state.roll || this.state.sides}
        </div>
        {
          special
            ? (
              <div className={"die-message " + special}>{special}</div>
            )
            : null
        }
      </div>
    );
  }

  _handleRoll() {
    const sides = this.state.sides;
    const roll = randomRoll(sides);
    let special = null;
    if (roll === sides) {
      special = 'crit';
    } else if (roll === 1) {
      special = 'fail';
    }
    this.setState({ roll, special });
  }

  _handleChange(change) {
    this.setState({ sides: this.state.sides + change})
  }

  _handleInput(event) {
    this.setState({ sides: Number(event.target.value) });
  }

  _handleRemove() {
    this.props.removeDie(this.props.index);
  }

};

Die.propTypes = {
  index: PropTypes.number.isRequired,
};

export default Die;
