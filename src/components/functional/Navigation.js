import React from 'react';
import PropTypes from 'prop-types';

const Navigation = props => (
  <div className="nav-bar">
    <div
      className="nav-create click"
    >
      <i className="material-icons md-48"
        onClick={() => props.setModal('create')}
      >add_circle</i>
    </div>
    <div
      className="nav-roll click"
      onClick={props.rollAll}
    >
      Roll
    </div>
    <div
      className="nav-settings click"
    >
      <i className="material-icons md-48" onClick={() => props.setModal('settings')}>settings</i>
    </div>
  </div>
);

Navigation.propTypes = {
  addMany: PropTypes.func.isRequired,
  addOne: PropTypes.func.isRequired,
  rollAll: PropTypes.func.isRequired,
  setModal: PropTypes.func.isRequired,
};

export default Navigation;
