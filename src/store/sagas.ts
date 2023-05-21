import {takeEvery} from 'redux-saga/effects'
import {appAPI} from "../api/api";
import {GET_POSTS, getAllPosts} from "./postsReducer";
import {put} from "redux-saga/effects";


export function* getPostsSaga():any {
  const payload = yield appAPI.getAllPosts().then(response => response.data)
  yield put(getAllPosts(payload))
}
export function* sagas() {
  yield takeEvery(GET_POSTS, getPostsSaga)
}

