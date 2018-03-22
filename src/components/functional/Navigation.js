import React from 'react';
import PropTypes from 'prop-types';

const Navigation = props => (
  <div className="nav-bar">
    <div
      className="nav-add-die click"
    >
      <i className="material-icons md-48"
        onClick={() => props.setModal('create')}
      >add_circle</i>
    </div>
    <div
      className="nav-roll click"
      onClick={props.rollAll}
    >
      <i className="material-icons md-48">autorenew</i>
    </div>
    <div
      className="nav-settings click"
    >
      <i className="material-icons md-48" onClick={() => props.setModal('settings')}>settings</i>
    </div>
  </div>
);

Navigation.propTypes = {
  addOne: PropTypes.func.isRequired,
  addMany: PropTypes.func.isRequired,
  rollAll: PropTypes.func.isRequired,
  setModal: PropTypes.func.isRequired,
  soundOn: PropTypes.bool.isRequired,
  toggleMenu: PropTypes.func.isRequired,
  toggleSettings: PropTypes.func.isRequired,
};

export default Navigation;
