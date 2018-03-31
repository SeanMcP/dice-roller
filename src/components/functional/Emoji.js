import React from 'react';
import PropTypes from 'prop-types';

const Emoji = props => (
    <span
        aria-hidden={props.label ? 'false' : 'true'}
        aria-label={props.label ? props.label : null}
        className={"emoji" + (props.contextClass ? " " + props.contextClass : "")}
        role="img"
    >
        {props.symbol}
    </span>
);

Emoji.propTypes = {
    contextClass: PropTypes.string,
    label: PropTypes.string,
    symbol: PropTypes.string.isRequired,
};

export default Emoji;