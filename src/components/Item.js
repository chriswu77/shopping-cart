import React, { useState, useEffect, useRef } from 'react';
import { useParams } from 'react-router-dom';
import completeMeal from '../completeMeal';
import completeProtein from '../completeProtein';
import completeEnergy from '../completeEnergy';
import Circles from './Circles';
import Dropdown from './Dropdown';
import Quantity from './Quantity';

const Item = () => {
  const { id } = useParams();
  const [product, setProduct] = useState({});

  const getProduct = () => {
    const allProducts = [...completeMeal];
    allProducts.push(completeProtein, completeEnergy);
    const foundItem = allProducts.find((item) => item.id === id);
    setProduct(foundItem);
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
    // dropdown = Dropdown(flavors, currentFlavor);
    dropdown = (
      <div className="flavors-container">
        <label htmlFor="flavors" className="flavors-heading">
          Flavors
        </label>
        {Dropdown(flavors, currentFlavor)}
      </div>
    );
  } else {
    dropdown = null;
  }

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
          <Circles
            circle1={product.circle1}
            circle2={product.circle2}
            circle3={product.circle3}
            circle4={product.circle4}
            circle5={product.circle5}
          />
          {dropdown}
          <Quantity />
        </div>
      </div>
    </div>
  );
};

export default Item;
