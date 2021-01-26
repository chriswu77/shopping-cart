import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';

const ShopCard = ({ pic, hover, name, id, price }) => {
  let imgEl = useRef(null);

  const [dimensions, setDimensions] = useState({
    height: window.innerHeight,
    width: window.innerWidth,
  });
  const [imgWidth, setImgWidth] = useState(0);
  const [imgHeight, setImgHeight] = useState(0);

  const resizeImgs = () => {
    setImgWidth(imgEl.width);
    const ratio = 450 / 600;
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
    <div className="shop-card">
      <Link to={`/shopping-cart/shop/${id}`}>
        <div className="shop-card-click">
          <div className="img-container">
            <img
              ref={(el) => {
                imgEl = el;
              }}
              src={pic}
              alt={name}
              style={{ height: imgHeight }}
              className="shop-img"
            />
            <div className="img-overlay">
              <img src={hover} alt={name} style={{ height: imgHeight }} />
            </div>
          </div>
          <div className="shop-item-name">{name}</div>
        </div>
      </Link>
      <div className="bottle-text">12 bottles</div>
      <div className="shop-item-price">{`$${price}.00`}</div>
    </div>
  );
};

export default ShopCard;
