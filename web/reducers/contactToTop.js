import { CONTACT_TO_TOP } from '../actions'

const initialState = {
  url: 'home'
}

const contactToTop = (state = initialState, action) => {
  switch (action.type) {
    case CONTACT_TO_TOP:
      return {
        url: action.url
      }
    default:
      return state
  }
}

export default contactToTop
