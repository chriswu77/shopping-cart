import React from 'react';

const Quantity = () => {
  const decrement = () => console.log('dec');
  const increment = () => console.log('inc');

  return (
    <div className="quantity-container">
      <label htmlFor="quantity" className="quantity-heading">
        CASE QUANTITY
      </label>
      <div className="quantity-wrapper">
        <div className="quantity-adjuster">
          <button type="button" className="dec-btn">
            -
          </button>
          <input
            type="number"
            id="quantity"
            value="1"
            min="1"
            max="10"
            name="quantity"
          />
          <button type="button" className="inc-btn">
            +
          </button>
        </div>
        <div className="quantity-count">12 BOTTLES</div>
      </div>
    </div>
  );
};

export default Quantity;
