import React from 'react';
import PropTypes from 'prop-types';

const IconButton = ({ className, icon, label, size=24, theme, ...props }) => (
    <button
        className={`icon-button ${className ? className : ''}`}
        {...props}
        aria-label={label}
    >
        <i
            className={
                `material-icons md-${size} ${theme ? 'md-' + theme : ''}`
            }
            role="img"
        >
            {icon}
        </i>
    </button>
);

IconButton.propTypes = {
    icon: PropTypes.string.isRequired,
    label: PropTypes.string.isRequired,
    size: PropTypes.oneOf([18, 24, 36, 48]),
    theme: PropTypes.oneOf(['dark', 'light'])
};

export default IconButton;