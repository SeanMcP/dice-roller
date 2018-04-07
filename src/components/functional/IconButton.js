import React from 'react';
import PropTypes from 'prop-types';

const IconButton = (props) => (
    <div
        className={"icon-button click" + (props.contextClass ? " " + props.contextClass : "")}
        onClick={props.action}
    >
        <i className="material-icons">{props.icon}</i>
    </div>
);

IconButton.propTypes = {
    action: PropTypes.func.isRequired,
    contextClass: PropTypes.string,
    icon: PropTypes.string.isRequired,
};

export default IconButton;