import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useStore } from '../context/StoreContext';
import LoadingIndicator from './LoadingIndicator';

const ProductDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { state, dispatch } = useStore();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [isAdded, setIsAdded] = useState(false);

  useEffect(() => {
    const fetchProductDetail = async () => {
      setLoading(true);
      try {
        const response = await fetch(`https://fakestoreapi.com/products/${id}`);
        if (!response.ok) {
          throw new Error('Product not found');
        }
        const data = await response.json();
        setProduct(data);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchProductDetail();
  }, [id]);

  const addToCart = () => {
    if (product) {
      dispatch({ type: 'ADD_TO_CART', payload: product });
      setIsAdded(true);

      // Reset animation after 1 second
      setTimeout(() => {
        setIsAdded(false);
      }, 1000);
    }
  };

  const goBack = () => {
    navigate(-1);
  };

  if (loading) {
    return <LoadingIndicator />;
  }

  if (error) {
    return <div className="error-message">Error: {error}</div>;
  }

  if (!product) {
    return <div>Product not found</div>;
  }

  return (
    <div className="product-detail">
      <button onClick={goBack} className="back-button">
        &larr; Back
      </button>
      <div className="product-detail-content">
        <div className="product-image">
          <img src={product.image} alt={product.title} />
        </div>
        <div className="product-info">
          <h2>{product.title}</h2>
          <p className="product-category">Category: {product.category}</p>
          <p className="product-price">${product.price.toFixed(2)}</p>
          <p className="product-description">{product.description}</p>
          <button onClick={addToCart} className={`add-to-cart-btn ${isAdded ? 'added-to-cart-animation' : ''}`}>
            {isAdded ? 'Added to Cart!' : 'Add to Cart'}
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
