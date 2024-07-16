import { configureStore } from '@reduxjs/toolkit';
import nameReducer from './introSlice';

export const store = configureStore({
  reducer: {
    name: nameReducer,
  },
});

export default store;
