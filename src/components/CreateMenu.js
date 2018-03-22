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
      <ul className="create-menu modal-menu create">
        <li className="heading">Create<i className="material-icons">add_circle</i></li>
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
        <li
          className="button"  
          onClick={() => addMany(diceInfo.dnd)}>
          D&D set
        </li>
        <li
          className="button"  
          onClick={() => addMany(diceInfo.settlers)}>
          Settlers
        </li>
        <li
          className="button"  
          onClick={() => addMany(diceInfo.yahtzee)}>
          Yahtzee
        </li>
        <li>
          <span onClick={() => addOne(6)}>D6</span>
          <span onClick={() => addOne(10)}>D10</span>
          <span onClick={() => addOne(12)}>D12</span>
          <span onClick={() => addOne(20)}>D20</span>
          <span onClick={() => addOne(100)}>D100</span>
        </li>
      </ul>
    )
  }

  _handleChange(e) {
    e.preventDefault();
    this.setState({ newDie: e.target.value });
  }

  _handleCreate() {
    this.props.addOne({ sides: Number(this.state.newDie) });
    this.setState({ newDie: '' });
  }
};

CreateMenu.propTypes = {
  addOne: PropTypes.func.isRequired,
  addMany: PropTypes.func.isRequired,
};

export default CreateMenu;
