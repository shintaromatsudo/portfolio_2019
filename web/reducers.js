import { combineReducers } from 'redux'
import { CHANGE_TITLE, CHANGE_CONTENT, INITIALIZE_FORM } from './actions'

const initialState = {
  form: {
    title: '',
    content: ''
  },
  blogs: {
    isFetching: false,
    blogArray: []
  }
}

const formReducer = (state = initialState.form, action) => {
  switch (action.type) {
    case CHANGE_TITLE:
      return {
        ...state,
        title: action.title
      }
    case CHANGE_CONTENT:
      return {
        ...state,
        content: action.content
      }
    case INITIALIZE_FORM:
      return initialState.form
    default:
      return state
  }
}

const blogsReducer = (state = initialState.blogs, action) => {
  switch (action.type) {
    default:
      return true
  }
}

const rootReducer = combineReducers({
  form: formReducer,
  blogs: blogsReducer
})

export default rootReducer
