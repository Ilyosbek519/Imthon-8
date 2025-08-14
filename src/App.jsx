import React, { useState, useEffect } from "react";
import { PRODUCTS } from "./products";
import ProductCard from "./Components/ProductCard";
import Cart from "./Components/Cart";
import "./App.css";

export default function App() {
  const [cart, setCart] = useState(() => {
    const saved = localStorage.getItem("cart");
    return saved ? JSON.parse(saved) : [];
  });

  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);

  const addToCart = (id, change) => {
    setCart(prev => {
      const exists = prev.find(item => item.id === id);
      if (exists) {
        const updated = prev
          .map(item =>
            item.id === id ? { ...item, qty: item.qty + change } : item
          )
          .filter(item => item.qty > 0);
        return updated;
      }
      return [...prev, { id, qty: 1 }];
    });
  };

  const removeFromCart = (id) => {
    setCart(prev => prev.filter(item => item.id !== id));
  };

  return (
    <div className="app">
      <div className="container">
        <h1 className="title">Desserts</h1>
        <div className="layout">
          <div className="products">
            {PRODUCTS.map(p => {
              const item = cart.find(c => c.id === p.id);
              return (
                <ProductCard key={p.id} product={p} qty={item?.qty || 0} addToCart={addToCart}
                />
              );
            })}
          </div>
          <Cart cart={cart} products={PRODUCTS} addToCart={addToCart} removeFromCart={removeFromCart}
          />
        </div>
      </div>
    </div>
  );
}

