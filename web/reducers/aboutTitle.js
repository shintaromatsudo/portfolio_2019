import { CHANGE_ABOUT_TITLE } from '../actions'

const initialState = {
  aboutTitle: 'GREETING'
}

const aboutTitle = (state = initialState, action) => {
  switch (action.type) {
    case CHANGE_ABOUT_TITLE:
      return {
        aboutTitle: action.aboutTitle
      }
    default:
      return state
  }
}

export default aboutTitle
