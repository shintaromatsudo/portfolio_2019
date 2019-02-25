import { createStore } from 'redux'
// import { createStore, applyMiddleware } from 'redux'
import { devToolsEnhancer } from 'redux-devtools-extension'
// import createSagaMiddleware from 'redux-saga'
import rootReducer from './reducers'
// import rootSaga from 'sagas'

// const sagaMiddleware = createSagaMiddleware()

// const bindMiddleware = middleware => {
//   return applyMiddleware(...middleware)
// }

function configureStore(initialState) {
  const store = createStore(rootReducer, initialState, devToolsEnhancer({}))

  // function configureStore(initialState) {
  //   const store = createStore(
  //     rootReducer,
  //     initialState,
  //     bindMiddleware([sagaMiddleware]),
  //     devToolsEnhancer({})
  //   )

  // store.runSagaTask = () => {
  //   store.sagaTask = sagaMiddleware.run(rootSaga)
  // }

  //   store.runSagaTask()
  return store
}

export default configureStore
