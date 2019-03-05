// 文字列定数
export const CHANGE_TITLE = 'CHANGE_TITLE'
export const CHANGE_CONTENT = 'CHANGE_CONTENT'
export const INITIALIZE_FORM = 'INITIALIZE_FORM'
export const INCREMENT = 'INCREMENT'
export const DECREMENT = 'DECREMENT'
export const ADD_TODO = 'ADD_TODO'
export const SET_VISIBILITY_FILTER = 'SET_VISIBILITY_FILTER'
export const TOGGLE_TODO = 'TOGGLE_TODO'
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
