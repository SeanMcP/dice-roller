import React from 'react';
import PropTypes from 'prop-types';

const Modal = props => {
    if (props.modalState === 'none') {
        return null;
    }
    return (
        <div className="modal-container">
            {props.children}
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