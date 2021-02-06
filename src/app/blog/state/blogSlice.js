import { createSlice } from "@reduxjs/toolkit";

export const blogSlice = createSlice({
  name: "blog",
  initialState: {
    posts: [],
    comments: [],
  },
  reducers: {
    loadPosts: (state, action) => {
      state.posts = [...state.posts, ...action.payload];
    },
    loadComments: (state, action) => {
      state.comments = [...state.comments, ...action.payload];
    },
  },
});

const actions = {
  loadPosts: blogSlice.actions.loadPosts,
  loadComments: blogSlice.actions.loadComments,
};

const selectors = {
  blogPosts: (state) => state.blog.posts,
  blogComments: (state) => state.blog.comments,
};

export const blogState = {
  actions,
  selectors,
};

export default blogSlice.reducer;
