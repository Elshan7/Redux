import React from 'react';
import Header from './Header/Header';
import { useSelector } from 'react-redux';
import Box from './Box/Box';

const Basket = () => {
  // Use `state.basket.items` instead of `state.basket.item`
  const basketItems = useSelector((state) => state.basket.items);

  return (
    <div>
      <Header />
      {basketItems.length > 0 ? (
        basketItems.map((item) => (
          <Box item={item} key={item.id} />
        ))
      ) : (
        <p>No items in the basket</p>
      )}
    </div>
  );
};

export default Basket;

