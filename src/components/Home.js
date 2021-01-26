import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => (
  <div className="container">
    <div className="home-container">
      <div className="home-content">
        <h1 className="home-text">Complete Protein &</h1>
        <h1 className="home-text">Complete Energy</h1>
        <h1 className="home-text">Have Arrived!</h1>
        <Link to="/shopping-cart/shop" className="shop-btn-wrapper">
          <div className="shop-now-btn">
            <span className="shop-now-span">SHOP NOW</span>
          </div>
        </Link>
      </div>
    </div>
  </div>
);

export default Home;
