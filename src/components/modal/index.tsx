import React from 'react';
import './modal.css'; // Importe o CSS do modal

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  children: React.ReactNode;
}

const Modal: React.FC<ModalProps> = ({ isOpen, onClose, children }) => {
  if (!isOpen) return null;

  return (
    <div className="Modal-overlay" onClick={onClose}>
      <div className="Modal-content" onClick={e => e.stopPropagation()}>
        <button className="Modal-close-button" onClick={onClose}>
          ×
        </button>
        {children}
      </div>
    </div>
  );
};

export default Modal;
