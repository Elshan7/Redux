// import { configureStore } from '@reduxjs/toolkit'
// import { productSlice } from '../feature/product/productSlice'

// export const store = configureStore({
//   reducer: {
//     product: productSlice,
//   },
// })

import { configureStore } from '@reduxjs/toolkit';
import productReducer from '../feature/product/productSlice'; // Import default exported reducer

export const store = configureStore({
  reducer: {
    product: productReducer, // Correctly pass the reducer here
  },
});
