import React, { Component } from 'react';
import PropTypes from 'prop-types';

class CreateMenu extends Component {
  constructor(props) {
    super(props);
    this.state = { newDie: '' };
  }
  render() {
    const diceInfo = {
      dnd: [
        { sides: 4, style: 'dnd' },
        { sides: 6, style: 'dnd' },
        { sides: 8, style: 'dnd' },
        { sides: 10, style: 'dnd' },
        { sides: 12, style: 'dnd' },
        { sides: 20, style: 'dnd' },
        { sides: 100, style: 'dnd' },
      ],
      settlers: [
        { sides: 6, style: 'settlers-red' },
        { sides: 6, style: 'settlers-yellow' },
      ],
      yahtzee: [
        { sides: 6 },
        { sides: 6 },
        { sides: 6 },
        { sides: 6 },
        { sides: 6 },
      ]
    };
    const addOne = this.props.addOne;
    const addMany = this.props.addMany;
    return (
      <div className="overlay" onClick={this.props.toggleMenu}>
        <ul className="create-menu">
          <li>
              <input
                type="number"
                placeholder="Custom die"
                value={this.state.newDie}
                onChange={this._handleChange.bind(this)}
              />
              <input
                onClick={this._handleCreate.bind(this)}
                type="submit"
                value="Create"
              />
          </li>
          <li onClick={() => addMany(diceInfo.dnd)}>
            <span>D&D set</span>
          </li>
          <li onClick={() => addMany(diceInfo.settlers)}>
            <span>Settlers</span>
          </li>
          <li onClick={() => addMany(diceInfo.yahtzee)}>
            <span>Yahtzee</span>
          </li>
          <li>
            <span onClick={() => addOne(6)}>D6</span>
            <span onClick={() => addOne(10)}>D10</span>
            <span onClick={() => addOne(12)}>D12</span>
            <span onClick={() => addOne(20)}>D20</span>
            <span onClick={() => addOne(100)}>D100</span>
          </li>
        </ul>
      </div>
    )
  }

  _handleChange(e) {
    e.preventDefault();
    this.setState({ newDie: e.target.value });
  }

  _handleCreate() {
    this.props.addOne([{ sides: this.state.newDie }]);
    this.setState({ newDie: '' });
  }
};

CreateMenu.propTypes = {
  addOne: PropTypes.func.isRequired,
  toggleMenu: PropTypes.func.isRequired
};

export default CreateMenu;
