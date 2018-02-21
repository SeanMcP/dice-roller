import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { randomRoll } from '../utils/';

class Die extends Component {
  constructor(props) {
    super(props);

    this.state = {
      sides: 20,
      roll: null,
    };
  }
  componentDidMount() {
    if (this.state.sides !== this.props.sides) {
      this.setState({ sides: this.props.sides });
    }
  }
  render() {
    return (
      <div className="die">
        <div className="die-screen">
          <div className="die-info">
            <label className="die-label">D</label>
            <input
              name="die-input"
              className="die-input"
              type="number"
              value={this.state.sides}
              onChange={this._handleInput.bind(this)}
              min="2"
            />
          </div>
          <div
            className="die-remove click center"
            onClick={this._handleRemove.bind(this)}
          >
            <i className="material-icons">close</i>
          </div>
        </div>
        <div
          className="die-roll click center"
          onClick={this._handleRoll.bind(this)}
        >
          {this.state.roll || this.state.sides || this.props.sides}
        </div>
      </div>
    );
  }

  _handleRoll() {
    const sides = this.state.sides;
    const roll = randomRoll(sides);
    this.setState({ roll });
  }

  _handleChange(change) {
    const newVal = this.state.sides + change;
    this.setState({ sides: newVal });
    this.props.changeSides(this.props.dieId, newVal);
  }

  _handleInput(event) {
    const newVal = Number(event.target.value);
    this.setState({ sides: newVal });
    this.props.changeSides(this.props.dieId, newVal);
  }

  _handleRemove() {
    this.props.removeDie(this.props.dieId);
  }

};

Die.propTypes = {
  sides: PropTypes.number.isRequired,
  dieId: PropTypes.string.isRequired,
  removeDie: PropTypes.func.isRequired,
  changeSides: PropTypes.func.isRequired,
};

export default Die;
