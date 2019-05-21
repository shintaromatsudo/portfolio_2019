import { combineReducers } from 'redux'
import count from './count'
import form from './form'
import todos from './todos'
import visibilityFilter from './visibilityFilter'
import { fetchBlogData } from './blogs'
import aboutTitle from './aboutTitle'

const rootReducer = combineReducers({
  count,
  form,
  todos,
  visibilityFilter,
  fetchBlogData,
  aboutTitle
})

export default rootReducer
