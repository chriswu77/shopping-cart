import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import xv2 from '../imgs/xv2.svg';
import CartQuantity from './CartQuantity';

const Cart = ({
  cart,
  showCart,
  toggleCart,
  updateQuantity,
  removeFromCart,
}) => {
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
      document.querySelector('body').style.overflow = 'hidden';
      backdrop.style.opacity = 0.7;
      cartModal.style.transform = 'translateX(0%)';
      document.addEventListener('click', handleOutsideClick);
    } else {
      modal.style.visibility = 'hidden';
      document.querySelector('body').style.overflow = 'auto';
      backdrop.style.opacity = 0;
      cartModal.style.transform = 'translateX(100%)';
      document.removeEventListener('click', handleOutsideClick);
    }
  }, [showCart, cart]);

  const formatAmt = (amt) => `$${amt.toFixed(2)}`;

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
        <div className="cart-items">
          <ul className="cart-list">
            {cart.map((item) => (
              <li className="cart-item" key={item.id}>
                <div className="cart-item-part">
                  <img
                    className="cart-item-pic"
                    src={item.pic}
                    alt={item.name}
                  />
                  <Link className="cart-item-name" to={`/shop/${item.nameId}`}>
                    {item.name}
                  </Link>
                </div>
                <div className="cart-item-part">
                  <CartQuantity
                    id={item.nameId}
                    quantity={item.quantity}
                    setQuantity={updateQuantity}
                  />
                  <div className="cart-item-price">{formatAmt(item.price)}</div>
                </div>
                <button
                  type="button"
                  className="delete-item-btn"
                  data-remove={item.nameId}
                  onClick={(e) => removeFromCart(e)}
                >
                  X Remove
                </button>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Cart;
