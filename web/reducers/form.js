import { CHANGE_TITLE, CHANGE_CONTENT, INITIALIZE_FORM } from '../actions'

const initialState = {
  form: {
    title: 'タイトル',
    content: ''
  }
}

const form = (state = initialState.form, action) => {
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

export default form
