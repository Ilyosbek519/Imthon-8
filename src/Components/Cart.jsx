import React, { useState } from "react";
import CartItem from "./CartItem";
import { LeafIcon } from "./Icons";

export default function Cart({ cart, products, addToCart, removeFromCart }) {
  const [showModal, setShowModal] = useState(false);

  const total = cart.reduce((sum, item) => {
    const product = products.find(p => p.id === item.id);
    return sum + product.price * item.qty;
  }, 0);

  const handleConfirmOrder = () => {
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };

  return (
    <>
      <aside className="cart">
        <h2 className="your-cart">Your Cart ({cart.length})</h2>
        <div>
          {cart.length === 0 ? (
            <p className="added-items">
              <img
                className="ilust-empt"
                src="/images/illustration-empty-cart.svg"
                alt=""
              />
              Your added items will appear here
            </p>
          ) : (
            cart.map(item => {
              const product = products.find(p => p.id === item.id);
              return (
                <CartItem
                  key={item.id}
                  item={item}
                  product={product}
                  addToCart={addToCart}
                  removeFromCart={removeFromCart}
                />
              );
            })
          )}
        </div>

        {cart.length > 0 && (
          <>
            <div className="eco">
              <LeafIcon />
              <span>
                This is a <b>carbon-neutral</b> delivery
              </span>
            </div>
            <div className="order-total">
              <span>Order Total</span>
              <span>${total.toFixed(2)}</span>
            </div>
            <button className="confirm-btn" onClick={handleConfirmOrder}>
              Confirm Order
            </button>
          </>
        )}
      </aside>
      
      {showModal && (
        <div className="modal-overlay">
          <div className="modal">
            <div className="check-icon">✔</div>
            <h2 className="modal-title">Order Confirmed</h2>
            <p className="modal-subtitle">We hope you enjoy your food!</p>
            <div className="order-total-modal">
                   <div>
               {cart.length === 0 ? (
                 <p className="added-items">
                   <img
                     className="ilust-empt"
                     src="/images/illustration-empty-cart.svg"
                     alt=""
                   />
                   Your added items will appear here
                 </p>
               ) : (
                 cart.map(item => {
                   const product = products.find(p => p.id === item.id);
                   return (
                     <CartItem
                       key={item.id}
                       item={item}
                       product={product}
                       addToCart={addToCart}
                       removeFromCart={removeFromCart}
                     />
                   );
                 })
               )}
             </div>
            </div>
            <div className="order-total">
              <span>Order Total</span>
              <span>${total.toFixed(2)}</span>
            </div>
            <button className="new-order-btn" onClick={handleCloseModal}>
              Start New Order
            </button>
          </div>
        </div>
      )}
    </>
  );
}
