import {createAction, createSlice} from '@reduxjs/toolkit';
import {PostType} from '../types';

type InitialStateType = {
  posts: PostType[]
  error: string
  commentsPostIsLoading: number
  isLoadingPosts: boolean
}

const initialState: InitialStateType = {
  posts: [] as PostType[],
  error: '',
  commentsPostIsLoading: 0,
  isLoadingPosts: true
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
    setIsLoadingPosts(state,action) {
      state.isLoadingPosts = action.payload
    },
    setErrorPosts(state,action) {
      state.error = action.payload
    },
  },
});

export const GET_POSTS = 'posts/getPosts';
export const getPosts = createAction(GET_POSTS);


export const postsReducer = slice.reducer;

export const {setAllPosts, setCommentsPostIsLoading,setIsLoadingPosts,setErrorPosts} = slice.actions;
