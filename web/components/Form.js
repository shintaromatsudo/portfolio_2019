import React from 'react'
import { changeTitle, changeContent } from '../actions'

const Form = ({ store }) => {
  const { title, content } = store.getState().form

  return (
    <div>
      <form>
        <label>
          Title:
          <input
            value={title}
            onChange={e => store.dispatch(changeTitle(e.target.value))}
          />
        </label>
        <label>
          Content:
          <textarea
            value={content}
            onChange={e => store.dispatch(changeContent(e.target.value))}
          />
        </label>
        <button type="submit">submit</button>
      </form>
    </div>
  )
}

export default Form
