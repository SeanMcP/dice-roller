import React from 'react';
import PropTypes from 'prop-types';

const StyleOption = props => (
  <div
    className={"style-option click " + props.contextClass}
    onClick={props.onClick}
  >
    •
  </div>
);

StyleOption.propTypes = {
  contextClass: PropTypes.string.isRequired
};

export default StyleOption;
