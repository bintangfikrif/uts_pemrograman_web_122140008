import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useStore } from '../context/StoreContext';
import LoadingIndicator from './LoadingIndicator';

const ProductList = () => {
  const { state, dispatch } = useStore();
  const { products, isLoading, error } = state;
  const [addedProductId, setAddedProductId] = useState(null);

  const addToCart = (product) => {
    dispatch({ type: 'ADD_TO_CART', payload: product });
    setAddedProductId(product.id);
    
    // Reset animation after 1 second
    setTimeout(() => {
      setAddedProductId(null);
    }, 1000);
  };

  if (isLoading) {
    return <LoadingIndicator />;
  }

  if (error) {
    return <div className="error-message">Error: {error}</div>;
  }

  return (
    <div className="product-list">
      {products.map(product => (
        <div key={product.id} className="product-card">
          <img src={product.image} alt={product.title} />
          <h3>{product.title}</h3>
          <p className="price">${product.price.toFixed(2)}</p>
          <div className="product-actions">
            <Link to={`/product/${product.id}`} className="view-details">
              View Details
            </Link>
            <button 
              onClick={() => addToCart(product)} 
              className={`add-to-cart ${addedProductId === product.id ? 'added-to-cart-animation' : ''}`}
            >
              {addedProductId === product.id ? 'Added!' : 'Add to Cart'}
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ProductList;