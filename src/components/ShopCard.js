import React, { useState, useEffect, useRef } from 'react';

const ShopCard = ({ pic, hover, name }) => {
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
      <div className="bottle-text">12 bottles</div>
    </div>
  );
};

export default ShopCard;
