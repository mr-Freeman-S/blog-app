import {createAction, createSlice} from '@reduxjs/toolkit';
import {PostType} from '../types';

type InitialStateType = {
  posts: PostType[]
  error: string
  isLoadingPosts: boolean
}

const initialState: InitialStateType = {
  posts: [] as PostType[],
  error: '',
  isLoadingPosts: false,

}

const slice = createSlice({
  name: 'posts',
  initialState,
  reducers: {
    setAllPosts(state, action) {
      state.posts = action.payload;
    },
    setIsLoadingComments(state, action) {
      state.posts[state.posts.findIndex(el => el.id === action.payload.id)] = action.payload.isLoading
    },
  },
});

export const GET_POSTS = 'posts/getPosts';
export const getPosts = createAction(GET_POSTS);


export const postsReducer = slice.reducer;

export const {setAllPosts,setIsLoadingComments} = slice.actions;
