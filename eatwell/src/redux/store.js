import { configureStore } from "@reduxjs/toolkit";
import productSlice from "./reducer/productSlice"; 
import basketSlice from "./reducer/basketSlice";
import wishlistSlice from './reducer/wishlistSlice'; 

export const store = configureStore({
  reducer: {
    product: productSlice,
    basket: basketSlice,
    wishlist: wishlistSlice 
  },
});
