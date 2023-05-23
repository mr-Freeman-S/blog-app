import {takeEvery,delay} from 'redux-saga/effects'
import {appAPI} from "../api/api";
import {GET_POSTS, setAllPosts, setIsLoadingComments} from "./postsReducer";
import {put} from "redux-saga/effects";
import {setCommentsPost, GET_COMMENTS_POST} from "./commentsReducer";


export function* getPostsSaga(): any {
  try {
    const payload = yield appAPI.getAllPosts().then(response => response.data)
    yield put(setAllPosts(payload))
  } catch (error) {

  } finally {
    yield put(setIsLoadingComments(false))
  }
}

export function* getCommentsPostSaga(action: { payload: { postId: number } }): any {

  const { postId } = action.payload;
  try {
    yield put(setIsLoadingComments(true))
    const payload = yield appAPI.getPostComments(postId).then(response =>response.data)
    yield put(setCommentsPost(payload))
    yield delay(5000)

  } catch (error) {

  } finally {
    yield put(setIsLoadingComments(false))

  }
}



export function* sagas() {
  yield takeEvery(GET_POSTS, getPostsSaga)
  // @ts-ignore
  yield takeEvery(GET_COMMENTS_POST, getCommentsPostSaga)
}

