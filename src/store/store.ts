import {combineReducers, configureStore} from '@reduxjs/toolkit'
import {postsReducer} from './postsReducer';
import createSagaMiddleware from 'redux-saga'
import {sagas} from './sagas';
import {commentsReducer} from './commentsReducer';
import {userReducer} from './userReducer';

export const rootReducer = combineReducers({
  posts: postsReducer,
  comments: commentsReducer,
  user: userReducer
})
const sagaMiddleware = createSagaMiddleware()

export const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(sagaMiddleware)
})

sagaMiddleware.run(sagas)

export type RootState = ReturnType<typeof store.getState>

export type AppDispatch = typeof store.dispatch