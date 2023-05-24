import {createAction, createSlice} from '@reduxjs/toolkit';
import {PostType, UserInfoType} from '../types';

type InitialStateType = {
  userPosts: PostType[],
  error: string
  userInfo: UserInfoType
  isLoadingUser: boolean

}

const initialState: InitialStateType = {
  userPosts: [],
  error: '',
  userInfo: {} as UserInfoType,
  isLoadingUser: true
}

const slice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setUserInfo(state, action) {
      state.userInfo = action.payload
    },
    setErrorUser(state, action) {
      state.error = action.payload
    },
    setIsLoadingUser(state, action) {
      state.isLoadingUser = action.payload
    },
    setUserPosts(state, action) {
      state.userPosts = action.payload
    },
  },
});

export const GET_USER_INFO = 'user/getUserInfo';
export const getUserInfo = createAction(GET_USER_INFO, (userId: number) => ({
  payload: {userId},
}));


export const userReducer = slice.reducer;

export const {setUserInfo, setErrorUser, setIsLoadingUser, setUserPosts} = slice.actions;
