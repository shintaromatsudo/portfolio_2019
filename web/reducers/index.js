import { combineReducers } from 'redux'
import count from './count'
import form from './form'
import todos from './todos'
import visibilityFilter from './visibilityFilter'
import fetchBlogData from './blogs'

const rootReducer = combineReducers({
  count,
  form,
  todos,
  visibilityFilter,
  fetchBlogData
})

export default rootReducer
