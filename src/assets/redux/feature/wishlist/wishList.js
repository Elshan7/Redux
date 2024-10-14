import { createSlice } from "@reduxjs/toolkit";



const initialState = {
    items:JSON.parse(localStorage.getItem("wishlist")) || [],
};

export const wishListSlice = createSlice ({
    name: "wishlist",
    initialState,
    reducers: {
        addToWishlist : (state,action) => {
            state.items.push(action.payload);
            localStorage.setItem('wishlist',JSON.stringify(state.items));
        },
        deleteFromWishlist: (state,action) => {
            state.items = state.items.filter (item => item.id !== action.payload.id);
            localStorage.setItem('wishlist',JSON.stringify(state.items));
        },
        clearWishlist:(state) => {
            state.items = [];
            localStorage.removeItem('wishlist')
        },
    },
});

export const {addToWishlist, deleteFromWishlist, clearWishlist} = wishListSlice.actions;
export default wishListSlice.reducer;