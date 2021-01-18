import React, { useEffect, useState, useRef } from 'react';

const Quantity = ({ pricePer, setPrice }) => {
  const [quantity, setQuantity] = useState(1);
  const [bottles, setBottles] = useState(12);
  let decBtn = useRef(null);

  useEffect(() => {
    decBtn.setAttribute('disabled', 'disabled');
  }, []);

  useEffect(() => {
    setBottles(quantity * 12);
    setPrice(pricePer * quantity);
  }, [quantity]);

  const updateBtns = (inputVal) => {
    if (inputVal === '0' || inputVal === '1' || inputVal === '') {
      decBtn.setAttribute('disabled', 'disabled');
    } else {
      decBtn.removeAttribute('disabled');
    }
  };

  const updateQuantity = (val) => {
    if (val === '') {
      setQuantity(0);
    } else {
      setQuantity(parseInt(val, 10));
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
      setQuantity(newQuantity);
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
    setQuantity(newQuantity);
  };

  return (
    <div className="quantity-container">
      <label htmlFor="quantity" className="quantity-heading">
        CASE QUANTITY
      </label>
      <div className="quantity-wrapper">
        <div className="quantity-adjuster">
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
        <div className="quantity-count">{`${bottles} BOTTLES`}</div>
      </div>
    </div>
  );
};

export default Quantity;
