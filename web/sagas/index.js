import { all, put, call, takeEvery, delay } from 'redux-saga/effects'
import {
  INCREMENT_ASYNC,
  increment,
  RESET_ASYNC,
  reset,
  REQUEST_FETCH,
  success,
  fail
} from '../actions'
import getBlogs from '../API'

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
    yield put(success(payload.data))
  } catch (e) {
    yield put(fail(e.message))
  }
}

export default function* rootSaga() {
  yield all([
    takeEvery(INCREMENT_ASYNC, incrementAsync),
    takeEvery(RESET_ASYNC, resetAsync),
    takeEvery(REQUEST_FETCH, fetchData)
  ])
}
