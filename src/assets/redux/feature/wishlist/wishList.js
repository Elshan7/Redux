import { createSlice } from "@reduxjs/toolkit";



const initialState = {
    items:JSON.parse(localStorage.getItem("wishlist")) || [],
    error: null,
};

export const wishListSlice = createSlice ({
    name: "wishlist",
    initialState,
    reducers: {
        addToWishlist: (state, action) => {
            const existingItem = state.items.find(item => item.id === action.payload.id);
            if (existingItem) {
              alert("already exist in the wishlist")
            } else {
              state.items.push(action.payload);
              localStorage.setItem('wishlist', JSON.stringify(state.items));
              state.error = null; 
            }
          },
          deleteFromWishlist: (state, action) => {
            state.items = state.items.filter(item => item.id !== action.payload.id);
            localStorage.setItem('wishlist', JSON.stringify(state.items));
            state.error = null; 
          },
          clearWishlist: (state) => {
            state.items = [];
            localStorage.removeItem('wishlist');
            state.error = null; 
          },
    },
});

export const {addToWishlist, deleteFromWishlist, clearWishlist} = wishListSlice.actions;
export default wishListSlice.reducer;