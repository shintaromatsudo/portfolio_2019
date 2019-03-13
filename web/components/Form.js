import React from 'react'
import { Router } from '../routes'
import { connect } from 'react-redux'
import { changeTitle, changeContent, postData } from '../actions'

class Form extends React.Component {
  constructor(props) {
    super(props)
    console.log(props)
  }

  handleSubmit(e) {
    e.preventDefault()
    this.props.dispatch(postData(this.props.form))
    Router.pushRoute(`/admin`)
  }

  render() {
    const { title, content, dispatch } = this.props
    console.log(this.props)
    return (
      <div>
        <form
          onSubmit={value => {
            this.handleSubmit(value)
          }}
        >
          <label>
            Title
            <input
              value={title}
              onChange={e => dispatch(changeTitle(e.target.value))}
            />
          </label>
          <label>
            Content
            <textarea
              value={content}
              onChange={e => dispatch(changeContent(e.target.value))}
            />
          </label>
          {/* <input type="hidden" value={id} /> */}
          <button type="submit">submit</button>
        </form>
      </div>
    )
  }
}

export default connect(state => state)(Form)
