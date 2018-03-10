import React from 'react';
import PropTypes from 'prop-types';

const If = props => {
  if (!props.condition) {
    return null;
  }
  return (
    <div className={props.contextClass ? props.contextClass : ''}>
      {props.children}
    </div>
  )
}

If.propTypes = {
  condition: PropTypes.bool.isRequired,
  contextClass: PropTypes.string,
}

export default If;
