import { configureStore } from '@reduxjs/toolkit';
import productReducer from '../feature/product/productSlice'; 
import { basketSlice } from '../feature/basket/basketSlice';
import { wishListSlice } from '../feature/wishlist/wishList';
import userSlice from '../feature/user/userSlice';
import loginReducer from '../feature/login/loginSlice'; 

export const store = configureStore({
  reducer: {
    product: productReducer,
    basket: basketSlice.reducer,
    wishlist: wishListSlice.reducer,
    user: userSlice,
    login: loginReducer, 
  },
});

