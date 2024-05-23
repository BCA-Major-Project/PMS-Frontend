// Modal.js
import React from 'react';
import './Modal.css';

const Modal = ({ show, title, onClose, children, button_text = 'OK'}) => {
  if (!show) {
    return null;
  }

  return (
    <div className="modal" onClick={onClose}>
      <div className="modal-content" onClick={e => e.stopPropagation()}>
        <div className="modal-header">
          <h2 className="modal-title">{title}</h2>
        </div>
        <div className="modal-body">
          {children}
        </div>
        <div className="modal-footer">
          <button onClick={onClose} className="button">{button_text}</button>
        </div>
      </div>
    </div>
  );
};

export default Modal;