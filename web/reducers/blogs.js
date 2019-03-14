import { REQUEST_FETCH, SUCCEEDED_FETCH, FAILED_FETCH } from '../actions'

const initialState = {
  data: []
}

export const fetchBlogData = (state = initialState, action) => {
  switch (action.type) {
    case REQUEST_FETCH:
      return { ...state, fetching: true, error: null }
    case SUCCEEDED_FETCH:
      return {
        ...state,
        fetching: false,
        data: action.payload.blogs,
        error: null
      }
    case FAILED_FETCH:
      return {
        ...state,
        fetching: false,
        data: null,
        error: action.error
      }
    default:
      return state
  }
}
