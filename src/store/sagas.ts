import {delay, put, takeEvery} from 'redux-saga/effects'
import {appAPI} from "../api/api";
import {GET_POSTS, setAllPosts, setCommentsPostIsLoading} from "./postsReducer";
import {GET_COMMENTS_POST, setCommentsPost, setErrorComments} from "./commentsReducer";


export function* getPostsSaga(): any {
  try {
    const payload = yield appAPI.getAllPosts().then(response => response.data)
    yield put(setAllPosts(payload))
  } catch (error) {


  } finally {

  }
}

export function* getCommentsPostSaga(action: {type:string, payload: { postId: number } }): any {

  const {postId} = action.payload;
  try {
    yield put(setCommentsPostIsLoading(postId))
    const payload = yield appAPI.getPostComments(postId).then(response => response.data)
    yield put(setCommentsPost(payload))
    yield delay(500)
  } catch (error) {
    // @ts-ignore
    yield put(setErrorComments(error.message))
  } finally {
    yield put(setCommentsPostIsLoading(0))
  }
}


export function* sagas() {
  yield takeEvery(GET_COMMENTS_POST, getCommentsPostSaga)
  yield takeEvery(GET_POSTS, getPostsSaga)

}

