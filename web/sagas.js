import { all, put, call, takeEvery, delay } from 'redux-saga/effects'
import { INCREMENT_ASYNC, increment, RESET_ASYNC, reset } from './actions'

function* incrementAsync() {
  yield delay(500)
  console.log('done')
  yield put(increment())
}
function* resetAsync() {
  console.log('saga')
  yield delay(500)
  yield put(reset())
  console.log('done')
}

export default function* rootSaga() {
  yield all([
    takeEvery(INCREMENT_ASYNC, incrementAsync),
    takeEvery(RESET_ASYNC, resetAsync)
  ])
}
