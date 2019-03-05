import { combineReducers } from 'redux'
import count from './count'
import form from './form'
import todos from './todos'
import visibilityFilter from './visibilityFilter'

const rootReducer = combineReducers({
  count,
  form,
  todos,
  visibilityFilter
})

export default rootReducer
