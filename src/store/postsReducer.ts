import {createSlice} from '@reduxjs/toolkit';
import {PostType} from '../types';



const slice = createSlice({
  name: 'posts',
  initialState: {
    posts: [] as PostType[],
  },
  reducers: {
    setAllPosts(state, action) {
      state.posts = action.payload.posts;
    },
  },
});

export const postsReducer = slice.reducer;

export const {} = slice.actions;
