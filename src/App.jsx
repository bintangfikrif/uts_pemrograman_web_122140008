import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { StoreProvider } from './context/StoreContext';
import Header from './components/Header';
import Home from './pages/Home';
import ProductPage from './pages/ProductPage';
import CartPage from './pages/CartPage';
import NotFound from './pages/NotFound';
import ErrorBoundary from './components/ErrorBoundary';
import './styles.css';

function App() {
  return (
    <StoreProvider>
      <Router>
        <ErrorBoundary>
          <div className="app">
            <Header />
            <main className="main-content">
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/product/:id" element={<ProductPage />} />
                <Route path="/cart" element={<CartPage />} />
                <Route path="*" element={<NotFound />} />
              </Routes>
            </main>
            <footer className="footer">
              <p>&copy; 2025 Star Store. All rights reserved.</p>
            </footer>
          </div>
        </ErrorBoundary>
      </Router>
    </StoreProvider>
  );
}

export default App;
