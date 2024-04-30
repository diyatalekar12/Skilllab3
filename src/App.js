import React, { useState } from 'react';
import './App.css';

const products = [
  { id: 1, name: 'Men dress', category: 'Category A', price: 10, rating: 4.5, image: "/images/menwear.jpg" },
  { id: 2, name: 'Women wear', category: 'Category B', price: 20, rating: 4.0, image: "/images/womendress.jpeg" },
  { id: 3, name: 'Kids wear', category: 'Category C', price: 15, rating: 4.2, image: '/images/kidswear.jpg' },
  // Add more products as needed
];

const ShoppingCartApp = () => {
  const [cart, setCart] = useState([]);

  const addToCart = (product) => {
    setCart([...cart, { ...product, quantity: 1 }]);
  };

  const incrementQuantity = (productId) => {
    setCart(cart.map(item => item.id === productId ? { ...item, quantity: item.quantity + 1 } : item));
  };

  const decrementQuantity = (productId) => {
    setCart(cart.map(item => item.id === productId && item.quantity > 1 ? { ...item, quantity: item.quantity - 1 } : item));
  };

  return (
    <div className="shopping-cart-app">
      <nav className="navbar">
        <div className="search-bar">
          <input type="text" placeholder="Search products..." />
          <button>Search</button>
        </div>
        <div className="category-filters">
          <select>
            <option value="">All Categories</option>
            <option value="Category A">Category A</option>
            <option value="Category B">Category B</option>
            <option value="Category B">Category C</option>
          </select>
        </div>
      </nav>
      <div className="product-list">
        {products.map(product => (
          <div key={product.id} className="product-card">
            <img src = "/images/menwear.jpg" alt="men dress" />
            <div className="product-info">
              <h3>{product.name}</h3>
              <p>Category: {product.category}</p>
              <p>Price: ${product.price}</p>
              <p>Rating: {product.rating}</p>
              <div className="quantity-controls">
                <button onClick={() => decrementQuantity(product.id)}>-</button>
                <span>Quantity: {cart.find(item => item.id === product.id)?.quantity || 0}</span>
                <button onClick={() => incrementQuantity(product.id)}>+</button>
              </div>
              <button onClick={() => addToCart(product)}>Add to Cart</button>
            </div>
          </div>
        ))}
      </div>
      
      <div className="cart">
        <h2>Shopping Cart</h2>
        {cart.map(item => (
          <div key={item.id} className="cart-item">
            <p>{item.name} - Quantity: {item.quantity}</p>
            <p>Total Price: ${item.price * item.quantity}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ShoppingCartApp;
