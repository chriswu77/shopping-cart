import React, { useState, useEffect } from 'react';

const Circles = ({ circle1, circle2, circle3, circle4, circle5 }) => {
  const [one, setOne] = useState({});
  const [two, setTwo] = useState({});
  const [three, setThree] = useState({});
  const [four, setFour] = useState({});
  const [five, setFive] = useState({});

  const getData = () => {
    setOne(circle1 || {});
    setTwo(circle2 || {});
    setThree(circle3 || {});
    setFour(circle4 || {});
    setFive(circle5 || {});
  };

  useEffect(() => {
    getData();
  });

  return (
    <div className="circle-container">
      <div className="circle-card">
        <div className="circle">{one.units}</div>
        <div className="circle-text">{one.type}</div>
      </div>
      <div className="circle-card">
        <div className="circle">{two.units}</div>
        <div className="circle-text">{two.type}</div>
      </div>
      <div className="circle-card">
        <div className="circle">{three.units}</div>
        <div className="circle-text">{three.type}</div>
      </div>
      <div className="circle-card">
        <div className="circle">{four.units}</div>
        <div className="circle-text">{four.type}</div>
      </div>
      <div className="circle-card">
        <div className="circle">{five.units}</div>
        <div className="circle-text">{five.type}</div>
      </div>
    </div>
  );
};

export default Circles;
