import React from 'react';
import logo from '../imgs/logo.png';
import shoppingBag from '../imgs/shopping_bag.svg';

const NavBar = ({ totalCount }) => {
  let countDiv;

  if (totalCount > 0) {
    countDiv = <div className="cart-count">{totalCount}</div>;
  } else {
    countDiv = null;
  }

  return (
    <nav>
      <div className="nav-wrapper">
        <img className="logo" src={logo} alt="logo" />
        <button className="shop-btn" type="button">
          SHOP
        </button>
        <button className="bag-btn" type="button">
          <img src={shoppingBag} alt="shopping bag" />
          {countDiv}
        </button>
      </div>
    </nav>
  );
};

export default NavBar;
