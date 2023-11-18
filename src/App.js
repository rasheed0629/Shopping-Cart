import React, { useState } from 'react';
import './App.css';
import ProductList from './ProductList';
import ShoppingCart from './ShoppingCart';

function App() {
  const initialProducts = [
    { id: 1, name: 'Apple', price: 10, qnty: 0 },
    { id: 2, name: 'Banana', price: 15, qnty: 0 },
    { id: 3, name: 'Orange', price: 20, qnty: 0 },
    { id: 4, name: 'Grape', price: 25, qnty: 0 },
    { id: 5, name: 'Guava', price: 30, qnty: 0 },

  ];

  const [cartItems, setCartItems] = useState([]);
  //const [totalPrice, setTotalPrice] = useState(0);

  const addToCart = productss => {

    const itemIndex = cartItems.findIndex((i) => i.id === productss.id);  
    if (itemIndex >= 0) {
      const updatedCartItems = [...cartItems];
      updatedCartItems[itemIndex].qnty += 1;
      setCartItems(updatedCartItems);
    }
    else {
      const temp = { ...productss, qnty: 1 }
      setCartItems([...cartItems, temp]);
    }
  };

  const removeFromCart = itemToRemove => {
    setCartItems(cartItems.filter(items => items.id !== itemToRemove.id));
  };



  return (
    <div className="App">
      <h1>E-Commerce App</h1>
      <div >
      <ProductList products={initialProducts} addingToCart={addToCart} />
      <ShoppingCart cartItems={cartItems} removigFromCart={removeFromCart} />
      </div>
    </div>
  );
}

export default App;

