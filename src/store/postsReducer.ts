import {createAction, createSlice} from '@reduxjs/toolkit';
import {PostType} from '../types';

const initialState = {
  posts : [] as PostType[]
}

const slice = createSlice({
  name: 'posts',
  initialState,
  reducers: {
    getAllPosts(state, action) {
      state.posts = action.payload;
    },
  },
});

export const GET_POSTS = 'posts/getPosts';
export const getPosts = createAction(GET_POSTS);


export const postsReducer = slice.reducer;

export const {getAllPosts} = slice.actions;
