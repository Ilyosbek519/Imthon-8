import React from "react";
import { CartIcon } from "./Icons.jsx";

export default function ProductCard({ product, qty, addToCart }) {
  return (
    <article className="product-card">
      <div className="product-img-wrap">
        <img src={product.image} alt={product.title} className="product-img" />
        {qty > 0 && <div className="qty-badge">{qty}</div>}
      </div>

      <div className="product-info">
      <h3 className="product-id">{product.id}</h3>
        <p className="subtitle">{product.subtitle}</p>
        <h3 className="product-title">{product.title}</h3>
        <p className="price">${product.price.toFixed(2)}</p>

        <div className="actions">
          {qty > 0 ? (
            <div className="qty-control">
              <button onClick={() => addToCart(product.id, -1)}>
              <img src="public/images/icon-decrement-quantity.svg" alt="" />

              </button>
              <span>{qty}</span>
              <button onClick={() => addToCart(product.id, 1)}>
                <img src="public/images/icon-increment-quantity.svg" alt="" />
              </button>
            </div>
          ) : (
            <button onClick={() => addToCart(product.id, 1)} className="add-btn">
              <CartIcon /> Add to Cart
            </button>
          )}
        </div>
      </div>
    </article>
  );
}
