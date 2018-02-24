import React from 'react';
import PropTypes from 'prop-types';

const CreateMenu = props => {
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
  return (
    <ul className="create-menu">
      <li>
          <input
            type="number"
            placeholder="Custom die"
          />
          <input type="submit" value="Create" />
      </li>
      <li onClick={() => props.addDie(diceInfo.dnd)}>
        <span>D&D set</span>
      </li>
      <li onClick={() => props.addDie(diceInfo.settlers)}>
        <span>Settlers</span>
      </li>
      <li onClick={() => props.addDie(diceInfo.yahtzee)}>
        <span>Yahtzee</span>
      </li>
      <li>
        <span onClick={() => props.addDie({ sides: 6 })}>D6</span>
        <span onClick={() => props.addDie({ sides: 10 })}>D10</span>
        <span onClick={() => props.addDie({ sides: 12 })}>D12</span>
        <span onClick={() => props.addDie({ sides: 20 })}>D20</span>
        <span onClick={() => props.addDie({ sides: 100 })}>D100</span>
      </li>
    </ul>
  )
};

CreateMenu.propTypes = {
  addDie: PropTypes.func.isRequired,
};

export default CreateMenu;
