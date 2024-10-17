import React from 'react';
import Header from './Header/Header';
import { useSelector } from 'react-redux';
import Box from './Box/Box';
import Card2 from './Card2/Card2';

const Basket = () => {
 
  const basketItems = useSelector((state) => state.basket.items);

  return (
    <div>
      <Header />
      {basketItems.length > 0 ? (
        basketItems.map((item) => (
          <Card2 item={item} key={item.id} />
        ))
      ) : (
        <p>No items in the basket</p>
      )}
    </div>
  );
};

export default Basket;

