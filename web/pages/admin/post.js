import React from 'react'
import Button from '../../components/Button'
import Form from '../../components/Form'

class Post extends React.Component {
  render() {
    return (
      <div>
        <Button href="admin" name="Admin" />
        <Form store={this.props.store} />
      </div>
    )
  }
}

export default Post
