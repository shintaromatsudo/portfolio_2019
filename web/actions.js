import { createAction } from 'redux-actions'

// 文字列定数
export const CHANGE_TITLE = 'CHANGE_TITLE'
export const CHANGE_CONTENT = 'CHANGE_CONTENT'
export const INITIALIZE_FORM = 'INITIALIZE_FORM'
export const INCREMENT = 'INCREMENT'
export const DECREMENT = 'DECREMENT'
export const RESET = 'RESET'
export const ADD_TODO = 'ADD_TODO'
export const SET_VISIBILITY_FILTER = 'SET_VISIBILITY_FILTER'
export const TOGGLE_TODO = 'TOGGLE_TODO'
export const INCREMENT_ASYNC = 'INCREMENT_ASYNC'
export const RESET_ASYNC = 'RESET_ASYNC'

export const REQUEST_FETCH = 'REQUEST_FETCH'
export const SUCCEEDED_FETCH = 'SUCCEEDED_FETCH'
export const FAILED_FETCH = 'FAILED_FETCH'
export const REQUEST_POST = 'REQUEST_POST'
export const SUCCEEDED_POST = 'SUCCEEDED_POST'
export const FAILED_POST = 'FAILED_POST'
export const REQUEST_DETAIL = 'REQUEST_DETAIL'
export const SUCCEEDED_DETAIL = 'SUCCEEDED_DETAIL'
export const FAILED_DETAIL = 'FAILED_DETAIL'
export const REQUEST_UPDATE = 'REQUEST_UPDATE'
export const SUCCEEDED_UPDATE = 'SUCCEEDED_UPDATE'
export const FAILED_UPDATE = 'FAILED_UPDATE'
export const REQUEST_DELETE = 'REQUEST_DELETE'
export const SUCCEEDED_DELETE = 'SUCCEEDED_DELETE'
export const FAILED_DELETE = 'FAILED_DELETE'

export const CHANGE_ABOUT_TITLE = 'CHANGE_ABOUT_TITLE'

export const VisibilityFilters = {
  SHOW_ALL: 'SHOW_ALL',
  SHOW_COMPLETED: 'SHOW_COMPLETED',
  SHOW_ACTIVE: 'SHOW_ACTIVE'
}

// action creaters
export const changeTitle = title => ({
  type: CHANGE_TITLE,
  title
})
export const changeContent = content => ({
  type: CHANGE_CONTENT,
  content
})
export const initializeForm = () => ({
  type: INITIALIZE_FORM
})
export const increment = () => ({
  type: INCREMENT,
  count: 1
})

export const decrement = () => ({
  type: DECREMENT,
  count: -1
})

export const reset = () => ({
  type: RESET,
  count: 0
})

let nextTodoId = 0
export const addTodo = text => ({
  type: ADD_TODO,
  id: nextTodoId++,
  text
})

export const setVisibilityFilter = filter => ({
  type: SET_VISIBILITY_FILTER,
  filter
})

export const toggleTodo = id => ({
  type: TOGGLE_TODO,
  id
})

// export const incrementAsync = () => ({
//   type: INCREMENT_ASYNC
// })

export const incrementAsync = createAction(INCREMENT_ASYNC)

export const resetAsync = createAction(RESET_ASYNC)

export const fetchData = () => ({ type: REQUEST_FETCH })
export const successFetch = payload => ({ type: SUCCEEDED_FETCH, payload })
export const failFetch = message => ({ type: FAILED_FETCH, message })

export const postData = payload => ({ type: REQUEST_POST, payload })
export const successPost = payload => ({ type: SUCCEEDED_POST, payload })
export const failPost = message => ({ type: FAILED_POST, message })

export const detailData = id => ({ type: REQUEST_DETAIL, id })
export const successDetail = payload => ({ type: SUCCEEDED_DETAIL, payload })
export const failDetail = message => ({ type: FAILED_DETAIL, message })

export const updateData = payload => ({ type: REQUEST_UPDATE, payload })
export const successUpdate = payload => ({ type: SUCCEEDED_UPDATE, payload })
export const failUpdate = message => ({ type: FAILED_UPDATE, message })

export const deleteData = payload => ({ type: REQUEST_DELETE, payload })
export const successDelete = payload => ({ type: SUCCEEDED_DELETE, payload })
export const failDelete = message => ({ type: FAILED_DELETE, message })

export const changeAboutTitle = aboutTitle => ({
  type: CHANGE_ABOUT_TITLE,
  aboutTitle
})
