import {createAction, createSlice} from '@reduxjs/toolkit';
import {CommentType} from '../types';

type InitialStateType = {
  commentsPost: CommentType[],
  error: string

}

const initialState: InitialStateType = {
  commentsPost: [],
  error: '',
}

const slice = createSlice({
  name: 'comments',
  initialState,
  reducers: {
    setCommentsPost(state, action) {
      state.commentsPost.push(...action.payload)
    },
    setErrorComments(state, action) {
      state.error = action.payload
    },
  },
});

export const GET_COMMENTS_POST = 'comments/getComments';
export const getComments = createAction(GET_COMMENTS_POST,(postId:number)=> ({
  payload: {postId},
}));


export const commentsReducer = slice.reducer;

export const {setCommentsPost,setErrorComments} = slice.actions;
