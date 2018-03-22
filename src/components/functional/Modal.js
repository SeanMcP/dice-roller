import React from 'react';
import PropTypes from 'prop-types';

const Modal = props => {
    if (props.modalState === 'none') {
        return null;
    }
    const { children } = props;

    const childrenWithProps = React.Children.map(children, child =>
        React.cloneElement(child, { ...props })
    );
    return (
        <div className="modal-container">
            {childrenWithProps}
            <div className="modal-overlay" onClick={() => props.setModal('none')}/>
        </div>
    )
};

Modal.propTypes = {
    children: PropTypes.element,
    modalState: PropTypes.string.isRequired,
    setModal: PropTypes.func.isRequired,
};

export default Modal;