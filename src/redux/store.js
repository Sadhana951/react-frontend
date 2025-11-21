import { configureStore } from '@reduxjs/toolkit';
import cartReducer from './cartSlice';
import plantReducer from './plantSlice';

export const store = configureStore({
  reducer: {
    cart: cartReducer,
    plants: plantReducer,
  },
});

