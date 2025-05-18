// src/store.js
import { configureStore } from "@reduxjs/toolkit";
import productSlice from "./reducer/productSlice"; 
import basketSlice from "./reducer/basketSlice";
import wishlist from './reducer/wishlistSlice'; // ✅ DÜZGÜN İMPORT

export const store = configureStore({
  reducer: {
    product: productSlice,
    basket: basketSlice,
    wishlist: wishlist // ✅ wishlistSlice deyil, 'wishlist' olmalıdır
  },
});
