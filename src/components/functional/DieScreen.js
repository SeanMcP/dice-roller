import React from 'react';
import PropTypes from 'prop-types';

const DieScreen = props => (
  <div className="die-screen">
    <div
      className="die-button center increment click"
      onClick={() => props.handleChange(1)}
    >
      <i className="material-icons">keyboard_arrow_up</i>
    </div>
    <input
      className="die-input"
      type="number"
      value={props.value}
      onChange={props.handleInput}
    />
    <div
      className="die-button center decrement click"
      onClick={() => props.handleChange(-1)}
    >
      <i className="material-icons">keyboard_arrow_down</i>
    </div>
  </div>
);

DieScreen.propTypes = {
  handleChange: PropTypes.func.isRequired,
  handleInput: PropTypes.func.isRequired,
  value: PropTypes.number.isRequired,
};

export default DieScreen;
