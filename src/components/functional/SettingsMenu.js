import React from 'react';
import PropTypes from 'prop-types';

const SettingsMenu = props => (
    <ul className="modal-menu settings">
        <li className="heading">Settings<i className="material-icons">settings</i></li>
        <li
            className="button"
            onClick={props.toggleSound}
        >
            <i className="material-icons">
                {props.soundOn ? 'volume_off' : 'volume_up'}
            </i>
            Toggle sound
        </li>
        <li
            className="button"
            onClick={props.toggleTotal}
        >
            <i className="material-icons">add_to_photos</i>
            Find total
        </li>
        <li
            className="button"
            onClick={props.clearDice}
        >
            <i className="material-icons">delete_sweep</i>
            Remove all dice
        </li>
        <li>Project repository on <a href="https://github.com/seanmcp/dice-roller">GitHub</a></li>
        <li>Made with love by <a href="https://github.com/seanmcp">SeanMcP</a></li>
    </ul>
);

SettingsMenu.propTypes = {
    clearDice: PropTypes.func.isRequired,
    toggleSound: PropTypes.func.isRequired,
    toggleTotal: PropTypes.func.isRequired,
};

export default SettingsMenu;