import React, { useEffect, useRef } from 'react';

const CartQuantity = ({ id, quantity, setQuantity }) => {
  let decBtn = useRef(null);

  useEffect(() => {
    if (quantity <= 1) {
      decBtn.setAttribute('disabled', 'disabled');
    }
  }, []);

  const updateBtns = (inputVal) => {
    if (inputVal === '0' || inputVal === '1' || inputVal === '') {
      decBtn.setAttribute('disabled', 'disabled');
    } else {
      decBtn.removeAttribute('disabled');
    }
  };

  const updateQuantity = (val) => {
    if (val === '') {
      setQuantity(id, 0);
    } else {
      setQuantity(id, parseInt(val, 10));
    }
    updateBtns(val);
  };

  const displayQuantity = () => {
    if (quantity === 0) {
      return '';
    }
    return quantity;
  };

  const decrement = () => {
    const newQuantity = quantity - 1;
    if (newQuantity > 0) {
      setQuantity(id, newQuantity);
      decBtn.removeAttribute('disabled');
    }
    if (newQuantity === 1) {
      decBtn.setAttribute('disabled', 'disabled');
    }
  };
  const increment = () => {
    const newQuantity = quantity + 1;
    if (newQuantity > 1) {
      decBtn.removeAttribute('disabled');
    }
    setQuantity(id, newQuantity);
  };

  return (
    <div className="quantity-adjuster quantity-cart">
      <button
        type="button"
        className="dec-btn"
        ref={(el) => {
          decBtn = el;
        }}
        onClick={decrement}
      >
        -
      </button>
      <input
        type="number"
        id="quantity"
        value={displayQuantity()}
        min="1"
        max="10"
        name="quantity"
        onChange={(e) => updateQuantity(e.target.value)}
      />
      <button type="button" className="inc-btn" onClick={increment}>
        +
      </button>
    </div>
  );
};

export default CartQuantity;
