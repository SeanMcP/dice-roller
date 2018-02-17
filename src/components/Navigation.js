import React from 'react';
import PropTypes from 'prop-types';

const Navigation = props => (
  <div className="nav-bar">
    <div
      className="nav-add-die click"
      onClick={props.addDie}
    >
      <i className="material-icons md-48">&#xE147;</i>
    </div>
    <div
      className="nav-toggle-sound click"
      onClick={props.toggleSound}
    >
      <i className="material-icons md-48">
        { props.soundOn ? 'volume_off' : 'volume_up'}
      </i>
    </div>
  </div>
);

Navigation.propTypes = {
  addDie: PropTypes.func.isRequired,
  toggleSound: PropTypes.func.isRequired,
  soundOn: PropTypes.bool.isRequired,
};

export default Navigation;
