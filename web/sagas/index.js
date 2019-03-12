import { all, put, call, takeEvery, delay } from 'redux-saga/effects'
import {
  INCREMENT_ASYNC,
  increment,
  RESET_ASYNC,
  reset,
  REQUEST_FETCH,
  successFetch,
  failFetch,
  REQUEST_POST,
  successPost,
  failPost
} from '../actions'
import { getBlogs, postBlog } from '../API'

function* incrementAsync() {
  yield delay(500)
  yield put(increment())
}
function* resetAsync() {
  yield delay(500)
  yield put(reset())
}

function* fetchData() {
  try {
    const payload = yield call(getBlogs)
    console.log(payload)
    yield put(successFetch(payload.data))
  } catch (e) {
    yield put(failFetch(e.message))
  }
}

function* postData({ payload }) {
  try {
    const { title, content } = payload
    console.log(title)
    console.log(content)
    const responceData = yield call(postBlog, { title, content })
    console.log(responceData)
    yield put(successPost(responceData.data))
  } catch (e) {
    yield put(failPost(e.message))
  }
}

export default function* rootSaga() {
  yield all([
    takeEvery(INCREMENT_ASYNC, incrementAsync),
    takeEvery(RESET_ASYNC, resetAsync),
    takeEvery(REQUEST_FETCH, fetchData),
    takeEvery(REQUEST_POST, postData)
  ])
}
