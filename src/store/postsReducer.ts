import {createAction, createSlice} from '@reduxjs/toolkit';
import {PostType} from '../types';

type InitialStateType = {
  posts: PostType[]
  error: string
  commentsPostIsLoading: number
}

const initialState: InitialStateType = {
  posts: [] as PostType[],
  error: '',
  commentsPostIsLoading: 0

}

const slice = createSlice({
  name: 'posts',
  initialState,
  reducers: {
    setAllPosts(state, action) {
      state.posts = action.payload;
    },
    setCommentsPostIsLoading(state, action) {
      state.commentsPostIsLoading = action.payload;
    },
  },
});

export const GET_POSTS = 'posts/getPosts';
export const getPosts = createAction(GET_POSTS);


export const postsReducer = slice.reducer;

export const {setAllPosts, setCommentsPostIsLoading} = slice.actions;
