import React from 'react';
import PropTypes from 'prop-types';

const CreateMenu = props => {
  return (
    <ul className="create-menu">
      <li onClick={() => props.addDie()}>
        D&D set
      </li>
      <li onClick={() => props.addDie([6, 6])}>
        Settlers
      </li>
      <li onClick={() => props.addDie([6, 6, 6, 6, 6])}>
        Yahtzee
      </li>
      <li>
        <input
          type="number"
          placeholder="Custom die"
        />
      </li>
    </ul>
  )
};

CreateMenu.propTypes = {
  addDie: PropTypes.func.isRequired,
};

export default CreateMenu;
