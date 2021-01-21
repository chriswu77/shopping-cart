import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../imgs/logo.png';
import shoppingBag from '../imgs/shopping_bag.svg';

const NavBar = ({ toggleCart, totalCount }) => {
  let countDiv;
  if (totalCount > 0) {
    countDiv = <div className="cart-count">{totalCount}</div>;
  } else {
    countDiv = null;
  }

  return (
    <nav>
      <div className="nav-wrapper">
        <Link to="/">
          <img className="logo" src={logo} alt="logo" />
        </Link>
        <Link to="/shop">
          <button className="shop-btn" type="button">
            SHOP
          </button>
        </Link>
        <button className="bag-btn" type="button" onClick={toggleCart}>
          <img src={shoppingBag} alt="shopping bag" />
          {countDiv}
        </button>
      </div>
    </nav>
  );
};

export default NavBar;
