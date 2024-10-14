import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';


export const signUpUser = createAsyncThunk(
  'user/signUpUser', 
  async (userData, { rejectWithValue }) => {
    try {
      const response = await axios.post('https://66ffcd724da5bd237552095c.mockapi.io/users', userData);
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);

const userSlice = createSlice({
  name: 'user',
  initialState: {
    userInfo: null, 
    loading: false,
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(signUpUser.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(signUpUser.fulfilled, (state, action) => {
        state.loading = false;
        state.userInfo = action.payload; 
      })
      .addCase(signUpUser.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload; 
      });
  },
});

export default userSlice.reducer;

