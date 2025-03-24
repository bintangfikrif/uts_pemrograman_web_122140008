import React, { createContext, useContext, useReducer, useEffect } from 'react';

// Membuat context
const StoreContext = createContext();

// Initial state
const initialState = {
  products: [],
  cart: [],
  isLoading: false,
  error: null,
};

// Reducer untuk state management
const reducer = (state, action) => {
    switch (action.type) {
      case 'FETCH_PRODUCTS_START':
        return { ...state, isLoading: true, error: null };
      case 'FETCH_PRODUCTS_SUCCESS':
        return { ...state, isLoading: false, products: action.payload };
      case 'FETCH_PRODUCTS_ERROR':
        return { ...state, isLoading: false, error: action.payload };
      case 'ADD_TO_CART':
        // Cek apakah produk sudah ada di keranjang
        const existingItem = state.cart.find(item => item.id === action.payload.id);
        if (existingItem) {
          return {
            ...state,
            cart: state.cart.map(item =>
              item.id === action.payload.id
                ? { ...item, quantity: item.quantity + 1 }
                : item
            ),
          };
        } else {
          return {
            ...state,
            cart: [...state.cart, { ...action.payload, quantity: 1 }],
          };
        }
      case 'REMOVE_FROM_CART':
        return {
          ...state,
          cart: state.cart.filter(item => item.id !== action.payload),
        };
      case 'CLEAR_CART':
        return {
          ...state,
          cart: [],
        };
      default:
        return state;
    }
  };
  
  // Provider component
  export const StoreProvider = ({ children }) => {
    const [state, dispatch] = useReducer(reducer, initialState);
  
    // Fetch products dari API ketika component mount
    useEffect(() => {
      const fetchProducts = async () => {
        dispatch({ type: 'FETCH_PRODUCTS_START' });
        try {
          const response = await fetch('https://fakestoreapi.com/products');
          if (!response.ok) {
            throw new Error('Failed to fetch products');
          }
          const data = await response.json();
          dispatch({ type: 'FETCH_PRODUCTS_SUCCESS', payload: data });
        } catch (error) {
          dispatch({ type: 'FETCH_PRODUCTS_ERROR', payload: error.message });
        }
      };
  
      fetchProducts();
    }, []);
  
    return (
      <StoreContext.Provider value={{ state, dispatch }}>
        {children}
      </StoreContext.Provider>
    );
  };
  
  // Custom hook untuk menggunakan context
  export const useStore = () => {
    const context = useContext(StoreContext);
    if (!context) {
      throw new Error('useStore must be used within a StoreProvider');
    }
    return context;
  };
  