import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../imgs/logo.png';
import shoppingBag from '../imgs/shopping_bag.svg';
import greenBag from '../imgs/green_bag.svg';

const NavBar = ({ toggleCart, totalCount }) => {
  let bagImg;
  let countDiv;
  if (totalCount > 0) {
    bagImg = <img src={greenBag} alt="shopping bag" />;
    countDiv = <div className="cart-count">{totalCount}</div>;
  } else {
    bagImg = <img src={shoppingBag} alt="shopping bag" />;
    countDiv = null;
  }

  return (
    <nav>
      <div className="nav-wrapper">
        <Link to="/shopping-cart">
          <img className="logo" src={logo} alt="logo" />
        </Link>
        <Link to="/shopping-cart/shop">
          <button className="shop-btn" type="button">
            SHOP
          </button>
        </Link>
        <button className="bag-btn" type="button" onClick={toggleCart}>
          {bagImg}
          {countDiv}
        </button>
      </div>
    </nav>
  );
};

export default NavBar;
