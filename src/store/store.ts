import {combineReducers, configureStore} from '@reduxjs/toolkit'
import {postsReducer} from './postsReducer';


export const rootReducer = combineReducers({
  posts: postsReducer,
});
export const store = configureStore({
  reducer:rootReducer,
})

export type RootState = ReturnType<typeof store.getState>

export type AppDispatch = typeof store.dispatch