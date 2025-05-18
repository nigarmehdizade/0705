import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

export const getBasketThunk = createAsyncThunk('basket/get', async () => {
  const response = await axios.get('http://localhost:4000/basket');
  return response.data;
});

export const postBasketThunk = createAsyncThunk('basket/post', async (data) => {
  const response = await axios.post('http://localhost:4000/basket', data);
  return response.data;
});

export const deleteBasketThunk = createAsyncThunk('basket/delete', async (id) => {
  await axios.delete(`http://localhost:4000/basket/${id}`);
  return id;
});

const basketSlice = createSlice({
  name: 'basket',
  initialState: {
    basket: [],
    loading: false,
    error: null
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getBasketThunk.pending, (state) => {
        state.loading = true;
      })
      .addCase(getBasketThunk.fulfilled, (state, action) => {
        state.loading = false;
        state.basket = action.payload;
      })
      .addCase(getBasketThunk.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      })
      .addCase(postBasketThunk.fulfilled, (state, action) => {
        state.basket.push(action.payload);
      })
      .addCase(deleteBasketThunk.fulfilled, (state, action) => {
        state.basket = state.basket.filter(item => item._id !== action.payload);
      });
  }
});

export default basketSlice.reducer;
