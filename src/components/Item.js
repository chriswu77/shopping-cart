import React, { useState, useEffect, useRef } from 'react';
import { useParams } from 'react-router-dom';
import completeMeal from '../completeMeal';
import completeProtein from '../completeProtein';
import completeEnergy from '../completeEnergy';
import Circles from './Circles';

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
        </div>
      </div>
    </div>
  );
};

export default Item;
