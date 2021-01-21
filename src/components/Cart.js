import React, { useEffect, useRef } from 'react';
import xv2 from '../imgs/xv2.svg';

const Cart = ({ cart, showCart, toggleCart }) => {
  let modal = useRef(null);
  let backdrop = useRef(null);
  let cartModal = useRef(null);

  const handleOutsideClick = (e) => {
    if (backdrop && backdrop.contains(e.target)) {
      toggleCart();
    }
  };

  useEffect(() => {
    if (showCart) {
      modal.style.visibility = 'visible';
      backdrop.style.opacity = 0.7;
      cartModal.style.transform = 'translateX(0%)';
      document.addEventListener('click', handleOutsideClick);
    } else {
      modal.style.visibility = 'hidden';
      backdrop.style.opacity = 0;
      cartModal.style.transform = 'translateX(100%)';
      document.removeEventListener('click', handleOutsideClick);
    }
  }, [showCart]);

  return (
    <div
      ref={(el) => {
        modal = el;
      }}
      className="modal"
    >
      <div
        ref={(el) => {
          backdrop = el;
        }}
        className="backdrop"
      />
      <div
        ref={(el) => {
          cartModal = el;
        }}
        className="cart-container"
      >
        <div className="cart-heading">
          <h1 className="title">Your Cart</h1>
          <button type="button" className="x-btn" onClick={toggleCart}>
            <img src={xv2} alt="x" className="x-btn-svg" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Cart;
