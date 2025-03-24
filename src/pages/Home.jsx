import React from 'react';
import ProductList from '../components/ProductList';

const Home = () => {
  return (
    <div className="home-page">
      <h1>Welcome to Star Store</h1>
      <p>Browse our products and add them to your cart</p>
      <ProductList />
    </div>
  );
};

export default Home;