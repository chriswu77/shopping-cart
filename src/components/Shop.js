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
              id={card.id}
              price={card.price}
              key={card.id}
            />
          ))}
        </div>
      </div>
      <div className="category-container">
        <h2 className="shop-heading">Complete Protein</h2>
        <div className="shop-desc">
          Satisfy your protein needs without sacrificing nutrition or taste. A
          deliciously rich and creamy plant-based, high protein nutrition shake
          with 30g of complete plant-based protein, 39 essential nutrients and 1
          gram total sugars. This unique, well-balanced shake also provides 5g
          BCAAs and 1,000mg omega-3 healthy fats.
        </div>
        <div className="shop-cards">
          <ShopCard
            pic={completeProtein.shopPic}
            hover={completeProtein.hoverPic}
            name={completeProtein.name}
            id={completeProtein.id}
            price={completeProtein.price}
            key={completeProtein.id}
          />
        </div>
      </div>
      <div className="category-container">
        <h2 className="shop-heading">Complete Energy</h2>
        <div className="shop-desc">
          A delicious way to keep your going throughout the day without sugar
          highs and lows. This is not your typical energy drink. It is the first
          complete nutrition nootropics shake to fuel your mind and body.
          Formulated with a proprietary blend of b vitamins, caffeine,
          l-theanine, l-tyrosine, and alpha-GPC plus 15g of plant based protein
          and 39 essential nutrients.
        </div>
        <div className="shop-cards">
          <ShopCard
            pic={completeEnergy.shopPic}
            hover={completeEnergy.hoverPic}
            name={completeEnergy.name}
            id={completeEnergy.id}
            price={completeEnergy.price}
            key={completeEnergy.id}
          />
        </div>
      </div>
    </div>
  </div>
);

export default Shop;
