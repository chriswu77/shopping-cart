/* eslint-disable react/jsx-curly-newline */
import React, { useState, useEffect, useRef } from 'react';
import { useParams } from 'react-router-dom';
import completeMeal from '../completeMeal';
import completeProtein from '../completeProtein';
import completeEnergy from '../completeEnergy';
import Circles from './Circles';
import Dropdown from './Dropdown';
import Quantity from './Quantity';

const Item = ({ addToCart }) => {
  const { id } = useParams();
  const [product, setProduct] = useState({});
  const [price, setPrice] = useState(0);
  const [quantity, setQuantity] = useState(1);

  const getProduct = () => {
    const allProducts = [...completeMeal];
    allProducts.push(completeProtein, completeEnergy);
    const foundItem = allProducts.find((item) => item.id === id);
    setProduct(foundItem);
    setPrice(foundItem.price);
  };

  useEffect(() => {
    getProduct();
  }, []);

  let imgEl = useRef(null);
  const [dimensions, setDimensions] = useState({
    height: window.innerHeight,
    width: window.innerWidth,
  });
  const [imgWidth, setImgWidth] = useState(0);
  const [imgHeight, setImgHeight] = useState(0);

  const resizeImgs = () => {
    setImgWidth(imgEl.width);
    const ratio = 1100 / 1468;
    setImgHeight(imgWidth * ratio);
  };

  const handleResize = () => {
    setDimensions({
      height: window.innerHeight,
      width: window.innerWidth,
    });
  };

  useEffect(() => {
    window.addEventListener('resize', handleResize);
    resizeImgs();
    return () => window.removeEventListener('resize', handleResize);
  }, [dimensions, imgWidth]);

  let dropdown;

  if (
    id === 'soylent-drink-creamy-chocolate' ||
    id === 'soylent-drink-vanilla' ||
    id === 'soylent-drink-original'
  ) {
    const flavors = [
      { value: 'soylent-drink-creamy-chocolate', label: 'Creamy Chocolate' },
      { value: 'soylent-drink-vanilla', label: 'Vanilla' },
      { value: 'soylent-drink-original', label: 'Original' },
    ];
    const currentFlavor = flavors.find((flavor) => flavor.value === id);
    dropdown = (
      <div className="flavors-container">
        <label htmlFor="flavors" className="flavors-heading">
          FLAVORS
        </label>
        {Dropdown(flavors, currentFlavor)}
      </div>
    );
  } else {
    dropdown = null;
  }

  const formatPrice = () => `$${price.toFixed(2)}`;

  return (
    <div className="container">
      <div className="item-container">
        <img
          ref={(el) => {
            imgEl = el;
          }}
          src={product.itemPic}
          alt={product.name}
          style={{ height: imgHeight }}
          className="item-pic"
        />
        <div className="info-container">
          <h1 className="product-name">{product.name}</h1>
          <p className="product-desc">{product.itemDesc}</p>
          <div className="price-container">
            <span className="item-price">{formatPrice()}</span>
            <span className="per-bottle">{product.pricePerBottle}</span>
          </div>
          <Quantity
            quantity={quantity}
            setQuantity={setQuantity}
            pricePer={product.price}
            setPrice={setPrice}
          />
          {dropdown}
          <button
            type="button"
            className="shop-btn-wrapper cart-btn-wrapper"
            onClick={() => {
              if (quantity > 0) {
                addToCart(
                  product.shopPic,
                  quantity,
                  product.price,
                  product.name,
                  product.id
                );
              }
            }}
          >
            <div className="shop-now-btn cart-btn">
              <span className="shop-now-span cart-btn-span">ADD TO CART</span>
            </div>
          </button>
          <Circles
            circle1={product.circle1}
            circle2={product.circle2}
            circle3={product.circle3}
            circle4={product.circle4}
            circle5={product.circle5}
          />
        </div>
      </div>
    </div>
  );
};

export default Item;
