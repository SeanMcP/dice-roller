import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Emoji from './functional/Emoji';
import IconButton from './functional/IconButton';

class CreateMenu extends Component {
  constructor(props) {
    super(props);

    this.state = {
      newDie: '',
      validateInput: ''
    };

    this._handleChange = this._handleChange.bind(this);
    this._handleCreate = this._handleCreate.bind(this);
  }
  render() {
    const diceInfo = {
      dnd: [
        { sides: 4, style: 'green' },
        { sides: 6, style: 'green' },
        { sides: 8, style: 'green' },
        { sides: 10, style: 'green' },
        { sides: 12, style: 'green' },
        { sides: 20, style: 'green' },
        { sides: 100, style: 'green' },
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
    const isError = this.state.validateInput.length > 0;
    return (
      <ul className="create-menu modal-menu create">
        <li className="heading">Create</li>
        <li>
          <div className={"custom-die" + (isError ? ' error' : '')}>
              <input
                type="number"
                placeholder="Custom die"
                value={this.state.newDie}
                onChange={this._handleChange}
              />
              {isError ? (
                <div className="error-message">
                  <i className="material-icons md-18">warning</i>
                  {this.state.validateInput}
                </div>
              ) : null}
              <IconButton
                contextClass="create"
                icon="add_circle"
                action={this._handleCreate}
              />
            </div>
        </li>
        <li
          className="button"  
          onClick={() => addMany(diceInfo.dnd)}>
            <Emoji label="swords" symbol="⚔️" contextClass="li"/>
            D&D set
        </li>
        <li
          className="button"  
          onClick={() => addMany(diceInfo.settlers)}>
            <Emoji label="sheep" symbol="🐑"  contextClass="li"/>
            Settlers
        </li>
        <li
          className="button"  
          onClick={() => addMany(diceInfo.yahtzee)}>
            <Emoji symbol="🙋"  contextClass="li"/>
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
    this.setState({ newDie: e.target.value, validateInput: '' });
  }

  _handleCreate() {
    const num = Number(this.state.newDie);
    if (typeof num !== 'number') {
      this.setState({ validateInput: 'Must be a number' })
    } else if (num < 2) {
      this.setState({ validateInput: 'Must be greater than 1' })
    } else if (num > 999999999) {
      this.setState({ validateInput: 'Must be less than 1x10^9' })
    } else {
      this.props.addOne({ sides: Number(this.state.newDie) });
      this.setState({ newDie: '' });
    }
  }
};

CreateMenu.propTypes = {
  addMany: PropTypes.func.isRequired,
  addOne: PropTypes.func.isRequired,
};

export default CreateMenu;
