// 文字列定数
export const CHANGE_TITLE = 'CHANGE_TITLE'
export const CHANGE_CONTENT = 'CHANGE_CONTENT'
export const INITIALIZE_FORM = 'INITIALIZE_FORM'

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
