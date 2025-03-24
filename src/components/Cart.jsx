import React, { useState } from 'react';
import { useStore } from '../context/StoreContext';
import CheckoutPopup from './CheckoutPopUp';

const Cart = () => {
  const { state, dispatch } = useStore();
  const { cart } = state;
  const [showCheckoutPopup, setShowCheckoutPopup] = useState(false);

  const removeFromCart = (productId) => {
    dispatch({ type: 'REMOVE_FROM_CART', payload: productId });
  };

  const clearCart = () => {
    dispatch({ type: 'CLEAR_CART' });
  };

  const handleCheckout = () => {
    setShowCheckoutPopup(true);
  };

  const closePopup = () => {
    setShowCheckoutPopup(false);
    clearCart(); // Bersihkan cart setelah checkout berhasil
  };

  const totalPrice = cart.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  if (cart.length === 0) {
    return <div className="empty-cart">Your cart is empty</div>;
  }

  return (
    <div className="cart-container">
      <h2>Your Cart</h2>
      <div className="cart-items">
        {cart.map(item => (
          <div key={item.id} className="cart-item">
            <img src={item.image} alt={item.title} />
            <div className="item-details">
              <h3>{item.title}</h3>
              <p className="item-price">${item.price.toFixed(2)} x {item.quantity}</p>
              <p className="item-total">Total: ${(item.price * item.quantity).toFixed(2)}</p>
            </div>
            <button onClick={() => removeFromCart(item.id)} className="remove-btn">
              Remove
            </button>
          </div>
        ))}
      </div>
      <div className="cart-summary">
        <p className="cart-total">Total: ${totalPrice.toFixed(2)}</p>
        <div className="cart-actions">
          <button onClick={clearCart} className="clear-cart-btn">
            Clear Cart
          </button>
          <button onClick={handleCheckout} className="checkout-btn">
            Checkout
          </button>
        </div>
      </div>

      <CheckoutPopup 
        show={showCheckoutPopup} 
        onClose={closePopup} 
      />
    </div>
  );
};

export default Cart;