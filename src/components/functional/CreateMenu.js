import React from 'react';
import PropTypes from 'prop-types';

const CreateMenu = props => {
  return (
    <ul className="create-menu">
      <li>
          <input
            type="number"
            placeholder="Custom die"
          />
          <input type="submit" value="Create" />
      </li>
      <li onClick={() => props.addDie([4, 6, 8, 10, 12, 20, 100])}>
        <span>D&D set</span>
      </li>
      <li onClick={() => props.addDie([6, 6])}>
        <span>Settlers</span>
      </li>
      <li onClick={() => props.addDie([6, 6, 6, 6, 6])}>
        <span>Yahtzee</span>
      </li>
      <li>
        <span onClick={() => props.addDie([6])}>D6</span>
        <span onClick={() => props.addDie([10])}>D10</span>
        <span onClick={() => props.addDie([12])}>D12</span>
        <span onClick={() => props.addDie([20])}>D20</span>
        <span onClick={() => props.addDie([100])}>D100</span>
      </li>
    </ul>
  )
};

CreateMenu.propTypes = {
  addDie: PropTypes.func.isRequired,
};

export default CreateMenu;
