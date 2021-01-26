import React, { useState, useEffect } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import uniqid from 'uniqid';
import NavBar from './components/NavBar';
import Home from './components/Home';
import Shop from './components/Shop';
import Item from './components/Item';
import Cart from './components/Cart';

const App = () => {
  const [cart, setCart] = useState(
    JSON.parse(localStorage.getItem('cart')) || []
  );
  const [showCart, setShowCart] = useState(false);
  const [totalCount, setTotalCount] = useState(0);

  const getTotalItems = () => {
    if (cart.length > 0) {
      const totalItems = cart.reduce((total, item) => total + item.quantity, 0);
      setTotalCount(totalItems);
    } else if (cart.length === 0) {
      setTotalCount(0);
    }
  };

  useEffect(() => {
    getTotalItems();
    localStorage.setItem('cart', JSON.stringify(cart));
  }, [cart]);

  const toggleCart = () => {
    setShowCart(!showCart);
  };

  const addToCart = (pic, quantity, price, name, nameId) => {
    let item;
    let cartCopy;

    if (cart.length < 1) {
      item = { id: uniqid(), pic, quantity, price, name, nameId };
      cartCopy = [item];
    } else {
      cartCopy = [...cart];
      const found = cartCopy.find((cartItem) => cartItem.name === name);
      if (found) {
        found.quantity += quantity;
      } else {
        item = { id: uniqid(), pic, quantity, price, name, nameId };
        cartCopy.unshift(item);
      }
    }
    setCart(cartCopy);
    toggleCart();
  };

  const removeFromCart = (e) => {
    const removeId = e.target.dataset.remove;
    const cartCopy = [...cart];
    const index = cartCopy.findIndex((item) => item.nameId === removeId);
    cartCopy.splice(index, 1);
    setCart(cartCopy);
    if (cartCopy.length < 1) {
      toggleCart();
    }
  };

  const updateQuantity = (itemId, newQuantity) => {
    const cartCopy = [...cart];
    const selectedItem = cartCopy.find((item) => item.nameId === itemId);
    selectedItem.quantity = newQuantity;
    setCart(cartCopy);
  };

  return (
    <div className="App">
      <BrowserRouter>
        <NavBar toggleCart={toggleCart} totalCount={totalCount} />
        <Switch>
          <Route exact path="/shopping-cart" component={Home} />
          <Route exact path="/shopping-cart/shop" component={Shop} />
          <Route path="/shopping-cart/shop/:id">
            <Item addToCart={addToCart} />
          </Route>
        </Switch>
        <Cart
          cart={cart}
          showCart={showCart}
          toggleCart={toggleCart}
          updateQuantity={updateQuantity}
          removeFromCart={removeFromCart}
          totalCount={totalCount}
        />
      </BrowserRouter>
    </div>
  );
};

export default App;
