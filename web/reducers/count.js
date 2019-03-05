import { INCREMENT, DECREMENT } from '../actions'

const initialState = 0

const count = (state = initialState, action) => {
  let count = state
  switch (action.type) {
    case INCREMENT:
      return count + action.count
    case DECREMENT:
      return count + action.count
    default:
      return count
  }
}

export default count
