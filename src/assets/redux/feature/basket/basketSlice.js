import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  items: JSON.parse(localStorage.getItem("basket")) || [],
};

export const basketSlice = createSlice({
  name: "basket",
  initialState,
  reducers: {
    addToBasket: (state, action) => {
      state.items.push(action.payload);
      localStorage.setItem('basket', JSON.stringify(state.items)); 
    },
    deleteFromBasket: (state, action) => {
      state.items = state.items.filter(item => item.id !== action.payload.id);
      localStorage.setItem('basket', JSON.stringify(state.items)); 
    },
    clearBasket: (state) => {
      state.items = [];
      localStorage.removeItem('basket'); 
    },
  },
});

export const { addToBasket, deleteFromBasket, clearBasket } = basketSlice.actions;
export default basketSlice.reducer;
