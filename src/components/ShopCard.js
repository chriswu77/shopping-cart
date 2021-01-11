import React, { useState, useEffect, useRef } from 'react';

const ShopCard = ({ pic, hover, name }) => {
  let imgEl = useRef(null);
  const [imgWidth, setImgWidth] = useState(0);
  const [imgHeight, setImgHeight] = useState(0);

  useEffect(() => {
    setImgWidth(imgEl.width);
    const ratio = 450 / 600;
    setImgHeight(imgWidth * ratio);
  });

  return (
    <div className="shop-card">
      <div className="shop-card-click">
        <img
          ref={(el) => {
            imgEl = el;
          }}
          src={pic}
          alt={name}
          style={{ height: imgHeight }}
          className="shop-img"
        />
        <div className="shop-item-name">{name}</div>
      </div>
      <div>12 bottles</div>
    </div>
  );
};

export default ShopCard;
