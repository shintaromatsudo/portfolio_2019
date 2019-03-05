import React from 'react'
import { connect } from 'react-redux'
import { changeTitle, changeContent } from '../actions'

const Form = props => {
  console.log('form', props)
  const { title, content, store, dispatch } = props
  return (
    <div>
      <form>
        <label>
          Title:
          <input
            value={title}
            onChange={e => dispatch(changeTitle(e.target.value))}
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

export default connect()(Form)
