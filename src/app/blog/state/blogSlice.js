import { createSlice } from "@reduxjs/toolkit";

export const blogSlice = createSlice({
    name: 'blog',
    initialState: {
        posts: [],
    },
    reducers: {
        loadPosts: (state, action) => {
            state.posts = [...state.posts, ...action.payload]
        },
    }
})

const actions = {
    loadPosts: blogSlice.actions.loadPosts,
}

const selectors = {
    blogPosts: state => state.blog.posts,
}

export const blogState = {
    actions,
    selectors,
}

export default blogSlice.reducer;