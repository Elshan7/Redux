import React from 'react'
import Header from './Header/Header';
import Box from './Box/Box';
import { useSelector } from 'react-redux';

const WishList = () => {
    const wishListItems = useSelector((state) => state.wishlist.items);

  return (
    <div>

        <Header/>
        {wishListItems.length > 0 ? (
        wishListItems.map((item) => (
          <Box item={item} key={item.id} />
        ))
      ) : (
        <p>No items in the basket</p>
      )}
      
    </div>
  )
}

export default WishList
