import { createStore, applyMiddleware } from 'redux'
import createSagaMiddleware from 'redux-saga'
import logger from 'redux-logger'
import rootReducer from './reducers'
import rootSaga from './sagas'

const sagaMiddleware = createSagaMiddleware()

const bindMiddleware = middleware => {
  return applyMiddleware(...middleware)
}

// export const initStore = initialState => {
//   return createStore(rootReducer, initialState)
// }

function configureStore(initialState) {
  const store = createStore(
    rootReducer,
    initialState,
    bindMiddleware([sagaMiddleware, logger])
  )

  store.sagaTask = sagaMiddleware.run(rootSaga)

  // store.runSagaTask = () => {
  //   store.sagaTask = sagaMiddleware.run(rootSaga)
  // }

  // store.runSagaTask()
  return store
}

export default configureStore
