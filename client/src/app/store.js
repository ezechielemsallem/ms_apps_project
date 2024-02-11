import { configureStore } from '@reduxjs/toolkit';
import imagesDisplayerSlice from '../slices/imagesDisplayerSlice';

export const store = configureStore({
  reducer: {
    imagesDisplayer: imagesDisplayerSlice
  },
});
