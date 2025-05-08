import { configureStore } from "@reduxjs/toolkit";
import productSlice from "./reducer/productSlice"; 
import basketSlice from "./reducer/basketSlice";

export const store = configureStore({
  reducer: {
    product: productSlice,
    basket: basketSlice
  },
});
