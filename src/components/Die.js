import React, { Component } from 'react';
import PropTypes from 'prop-types';
import IconButton from './functional/IconButton';
import StyleMenu from './functional/StyleMenu';
import { randomRoll } from '../utils/';

class Die extends Component {
  constructor(props) {
    super(props);

    this.state = {
      sides: 20,
      roll: null,
      style: "classic",
      showStyleMenu: false,
      isRolling: false
    };

    this._adjustForSize = this._adjustForSize.bind(this);
    this._handleInput = this._handleInput.bind(this);
    this._handleRemove = this._handleRemove.bind(this);
    this._handleRoll = this._handleRoll.bind(this);
    this._handleSelect = this._handleSelect.bind(this);
    this._toggleStyleMenu = this._toggleStyleMenu.bind(this);
  }
  componentDidMount() {
    const idCode = this.props.id.split('&');
    const sides = Number(idCode[1]);
    const style = idCode[2];
    if (this.state.sides !== sides) {
      this.setState({ sides });
    }
    if (this.state.style !== style) {
      this.setState({ style });
    }
    this.props.onRef(this)
  }
  componentWillUnmount() {
    this.props.onRef(undefined)
  }
  render() {
    return (
      <div className={"die " + this.state.style + this._adjustForSize()}>
        <div className="die-sides">D{this.state.sides}</div>
        <IconButton
          action={this._handleRemove}
          contextClass="die-delete"
          icon="close"
        />
        <div
          className={"die-roll click center" + (this.state.isRolling ? " rolling" : "")}
          onClick={this._handleRoll}
        >
          {this.state.roll || this.state.sides}
        </div>
        <IconButton
          action={this._toggleStyleMenu}
          contextClass="die-edit"
          icon="color_lens"
        />
        {this.state.showStyleMenu ? (
          <StyleMenu
            handleSelect={this._handleSelect}
            toggleStyleMenu={this._toggleStyleMenu}
          />
        ) : null}
      </div >
    );
  }

  _adjustForSize() {
    const length = String(this.state.sides).length;
    console.log(length);
    if (length < 4) {
      return '';
    } else if (length < 7) {
      return ' large'
    } else if (length < 10) {
      return ' giant'
    }
    return '';
  }

  _handleRoll() {
    const sides = this.state.sides;
    const roll = randomRoll(sides);
    this.setState({ roll, isRolling: true });
    setTimeout(() => this.setState({ isRolling: false }), 100);
    this.props.playSound();
    return roll;
  }

  _handleInput(event) {
    let newVal = event.target.value.replace(/^[0]+/g, '');
    if (newVal.includes('-')) {
      newVal = 1;
    } else if (newVal > 999) {
      newVal = 999;
    }
    this.setState({ sides: newVal });
  }

  _handleRemove() {
    this.props.removeDie(this.props.id);
  }

  _handleSelect(style) {
    this.setState({ style });
    this._toggleStyleMenu();
  }

  _toggleStyleMenu() {
    this.setState({ showStyleMenu: !this.state.showStyleMenu });
  }

};

Die.propTypes = {
  id: PropTypes.string.isRequired,
  removeDie: PropTypes.func.isRequired,
  playSound: PropTypes.func.isRequired,
};

export default Die;
