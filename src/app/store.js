import { configureStore } from '@reduxjs/toolkit';
import prod from '../features/prod/prodSlice'

export const store = configureStore({
  reducer: {
    prod
  },
});
