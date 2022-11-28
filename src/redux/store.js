import { configureStore } from '@reduxjs/toolkit';
import desserts from './dessertsSlice';
import cart from './cartSlice';

export const store = configureStore({
  reducer: {
    desserts, 
    cart
  },
})