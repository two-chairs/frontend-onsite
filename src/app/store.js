import { configureStore } from '@reduxjs/toolkit';
import blogReducer from './blog/state/blogSlice';

export default configureStore({
  reducer: {
    blog: blogReducer,
  },
});
