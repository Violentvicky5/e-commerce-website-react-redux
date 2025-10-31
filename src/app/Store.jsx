import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "../features/cart/cartSlice";
import searchReducer from "../features/search/SearchSlice"

export const store = configureStore({
  reducer: {
    cart: cartReducer,
    search: searchReducer,
  },
});
