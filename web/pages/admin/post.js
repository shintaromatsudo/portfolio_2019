import React from 'react'
import Button from '../../components/Button'
import Form from '../../components/Form'

class Post extends React.Component {
  static async getInitialProps({ store }) {
    const { getState, dispatch } = store
    const { title, content } = getState().form
    return { title, content, store, dispatch }
  }

  render() {
    console.log('post', this.props)
    return (
      <div>
        <Button href="/admin" name="Admin" />
        <Form
          title={this.props.title}
          content={this.props.content}
          store={this.props.store}
          dispatch={this.props.dispatch}
          {...this.props}
        />
      </div>
    )
  }
}

export default Post
