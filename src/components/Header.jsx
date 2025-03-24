import React from 'react';
import { Link } from 'react-router-dom';
import { useStore } from '../context/StoreContext';

const Header = () => {
  const { state } = useStore();
  const cartItemCount = state.cart.reduce((total, item) => total + item.quantity, 0);

  return (
    <header className="header">
      <div className="logo">
        <Link to="/">React Store</Link>
      </div>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/cart" className="cart-link">
              Cart ({cartItemCount})
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;