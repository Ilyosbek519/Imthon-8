import React from "react";
import { XIcon } from "./Icons";

export default function CartItem({ item, product, addToCart, removeFromCart }) {
  return (
    <div className="cart-item">
      <img className="cart_item_img" src={product.image} alt={product.title} />
      <div className="cart-item-info">
        <div className="cart-item-header">
          <p>{product.title}</p>
          <button onClick={() => removeFromCart(item.id)}>
            <XIcon />
          </button>
        </div>
        <div className="cart-item-bottom">
          <div className="qty-control small">
            <button onClick={() => addToCart(item.id, -1)}>-</button>
            <span>{item.qty}</span>
            <button onClick={() => addToCart(item.id, 1)}>+</button>
          </div>
          <div>
            <span className="total">${(item.qty * product.price).toFixed(2)}</span>
            <span className="unit">({item.qty} × ${product.price.toFixed(2)})</span>
          </div>
        </div>
      </div>
    </div>
  );
}
