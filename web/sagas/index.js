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
  failPost,
  REQUEST_DETAIL,
  successDetail,
  failDetail,
  REQUEST_UPDATE,
  successUpdate,
  failUpdate,
  REQUEST_DELETE,
  successDelete,
  failDelete
} from '../actions'
import { getBlogs, postBlog, getBlog, updateBlog, deleteBlog } from '../API'

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
    yield put(successFetch(payload.data))
  } catch (e) {
    yield put(failFetch(e.message))
  }
}

function* postData({ payload }) {
  try {
    const { title, content } = payload
    const responceData = yield call(postBlog, { title, content })
    yield put(successPost(responceData.data))
  } catch (e) {
    yield put(failPost(e.message))
  }
}

function* fetchDetail({ payload }) {
  try {
    const id = payload
    const responceData = yield call(getBlog, { id })
    yield put(successDetail(responceData.data))
  } catch (e) {
    yield put(failDetail(e.message))
  }
}

function* updateData({ payload }) {
  try {
    const { id } = payload
    const responceData = yield call(updateBlog, { id })
    yield put(successUpdate(responceData.data))
  } catch (e) {
    yield put(failUpdate(e.message))
  }
}

function* deleteData({ payload }) {
  try {
    const { id } = payload
    const responceData = yield call(deleteBlog, { id })
    yield put(successDelete(responceData.data))
  } catch (e) {
    yield put(failDelete(e.message))
  }
}

export default function* rootSaga() {
  yield all([
    takeEvery(INCREMENT_ASYNC, incrementAsync),
    takeEvery(RESET_ASYNC, resetAsync),
    takeEvery(REQUEST_FETCH, fetchData),
    takeEvery(REQUEST_POST, postData),
    takeEvery(REQUEST_DETAIL, fetchDetail),
    takeEvery(REQUEST_UPDATE, updateData),
    takeEvery(REQUEST_DELETE, deleteData)
  ])
}
