import React from 'react';

const CheckoutPopup = ({ show, onClose }) => {
  if (!show) return null;

  return (
    <div className="checkout-popup-overlay">
      <div className="checkout-popup">
        <div className="checkout-success-icon">✓</div>
        <h2>Checkout Successful!</h2>
        <p>Thank you for your purchase.</p>
        <p>Your order has been processed successfully.</p>
        <button className="close-popup-btn" onClick={onClose}>
          Close
        </button>
      </div>
    </div>
  );
};

export default CheckoutPopup;