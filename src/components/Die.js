import React, { Component } from 'react';
import PropTypes from 'prop-types';
import IconButton from './functional/IconButton';
import StyleMenu from './functional/StyleMenu';
import { randomRoll } from '../utils/';

class Die extends Component {
  constructor(props) {
    super(props);

    this.state = {
      sides: props.sides,
      roll: null,
      style: props.style,
      showStyleMenu: false,
      isRolling: false
    }
  }

  componentDidMount() {
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
          className="die-delete"
          icon="close"
          label="Delete"
          onClick={this._handleRemove}
        />
        <button
          className={"die-roll click center" + (this.state.isRolling ? " rolling" : "")}
          onClick={this._handleRoll}
        >
          {this.state.roll || this.state.sides}
        </button>
        <IconButton
          className="die-duplicate"
          icon="content_copy"
          label="Duplicate"
          onClick={this._duplicate}
        />
        <IconButton
          className="die-edit"
          icon="color_lens"
          label="Style"
          onClick={this._toggleStyleMenu}
        />
        {this.state.showStyleMenu && (
          <StyleMenu
            handleSelect={this._handleSelect}
            toggleStyleMenu={this._toggleStyleMenu}
          />
        )}
      </div >
    );
  }

  _adjustForSize = () => {
    const length = String(this.state.sides).length;
    if (length < 4) {
      return '';
    } else if (length < 7) {
      return ' large'
    } else if (length < 10) {
      return ' giant'
    }
    return '';
  }

  _duplicate = () => {
    this.props.addOne({
      sides: this.state.sides,
      style: this.state.style
    });
  }

  _handleRemove = () => {
    this.props.removeDie(this.props.id);
  }

  _handleRoll = () => {
    const sides = this.state.sides;
    const roll = randomRoll(sides);
    this.setState({ roll, isRolling: true });
    setTimeout(() => this.setState({ isRolling: false }), 100);
    this.props.playSound();
    return roll;
  }

  _handleSelect = (style) => {
    this.setState({ style });
    this._toggleStyleMenu();
  }

  _toggleStyleMenu = () => {
    this.setState({ showStyleMenu: !this.state.showStyleMenu });
  }

};

Die.propTypes = {
  addOne: PropTypes.func.isRequired,
  id: PropTypes.string.isRequired,
  removeDie: PropTypes.func.isRequired,
  playSound: PropTypes.func.isRequired,
};

export default Die;
