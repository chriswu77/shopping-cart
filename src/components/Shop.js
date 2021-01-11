import React from 'react';
import completeMeal from '../completeMeal';
import completeProtein from '../completeProtein';
import completeEnergy from '../completeEnergy';
import ShopCard from './ShopCard';

const Shop = () => (
  <div className="container">
    <div className="shop-container">
      <div className="category-container">
        <h2 className="shop-heading">Complete Meal</h2>
        <div className="shop-desc">
          A great meal replacement that will actually get you full and keep you
          feeling fuller longer. Our convenient ready-to-drink shake provides 20
          grams of plant-based protein, 39 essential nutrients, healthy fats and
          400 calories of slower burning carbohydrates in one delicious serving.
        </div>
        <div className="shop-cards">
          {completeMeal.map((card) => (
            <ShopCard
              pic={card.shopPic}
              hover={card.hoverPic}
              name={card.name}
              key={card.id}
            />
          ))}
        </div>
      </div>
    </div>
  </div>
);

export default Shop;
