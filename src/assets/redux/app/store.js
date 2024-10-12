import { configureStore } from '@reduxjs/toolkit';
import productReducer from '../feature/product/productSlice'; 
import { basketSlice } from '../feature/basket/basketSlice';

export const store = configureStore({
  reducer: {
    product: productReducer,
    basket: basketSlice.reducer,
  },
});
