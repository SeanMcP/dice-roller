import React from 'react';
import PropTypes from 'prop-types';
import CreateMenu from './CreateMenu';

const Navigation = props => (
  <div className="nav-bar">
    <div
      className="nav-add-die click"
      onClick={
        props.menuOpen
        ? () => props.addDie([20])
        : props.toggleMenu
      }
    >
      {
        props.menuOpen
        ? (
          <CreateMenu
          addDie={props.addDie}
          toggleMenu={props.toggleMenu}
          />
        ) : null
      }
      <i className="material-icons md-48">add_circle</i>
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
  toggleMenu: PropTypes.func.isRequired,
  soundOn: PropTypes.bool.isRequired,
};

export default Navigation;
