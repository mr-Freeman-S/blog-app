import {delay, put, takeEvery} from 'redux-saga/effects'
import {appAPI} from "../api/api";
import {GET_POSTS, setAllPosts, setCommentsPostIsLoading, setErrorPosts, setIsLoadingPosts} from "./postsReducer";
import {GET_COMMENTS_POST, setCommentsPost, setErrorComments} from "./commentsReducer";
import {GET_USER_INFO, setErrorUser, setIsLoadingUser, setUserInfo, setUserPosts} from "./userReducer";


export function* getPostsSaga(): any {
  try {
    yield put(setIsLoadingPosts(true))
    const payload = yield appAPI.getAllPosts().then(response => response.data)
    yield put(setAllPosts(payload))
    yield delay(500)
  } catch (error:any) {
   yield put(setErrorPosts(error.message))
  } finally {
    yield put(setIsLoadingPosts(false))
  }
}

export function* getCommentsPostSaga(action: { type: string, payload: { postId: number } }): any {

  const {postId} = action.payload;
  try {
    yield put(setCommentsPostIsLoading(postId))
    const payload = yield appAPI.getPostComments(postId).then(response => response.data)
    yield put(setCommentsPost(payload))
    yield delay(500)
  } catch (error: any) {
    yield put(setErrorComments(error.message))
  } finally {
    yield put(setCommentsPostIsLoading(0))
  }
}

export function* getUserInfoSaga(action: { type: string, payload: { userId: number } }): any {
  const {userId} = action.payload;
  try {
    yield put(setIsLoadingUser(true))
    const userInfoPayload = yield appAPI.getUserInfo(userId).then(response => response.data)
    yield put(setUserInfo(userInfoPayload))
    const userPostsPayload = yield appAPI.getUserPosts(userId).then(response => response.data)
    yield put(setUserPosts(userPostsPayload))
    yield delay(500)
  } catch (error: any) {
    yield put(setErrorUser(error.message))
  } finally {
    yield put(setIsLoadingUser(false))
  }
}


export function* sagas() {
  yield takeEvery(GET_COMMENTS_POST, getCommentsPostSaga)
  yield takeEvery(GET_POSTS, getPostsSaga)
  yield takeEvery(GET_USER_INFO, getUserInfoSaga)

}

