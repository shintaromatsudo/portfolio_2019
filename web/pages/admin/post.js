import React from 'react'
import Button from '../../components/Button'
import Form from '../../components/Form'

class Post extends React.Component {
  render() {
    console.log(this.props)
    console.log(this.state)
    return (
      <div>
        <Button href="admin" name="Admin" />
        <Form store={this.props.store} />
      </div>
    )
  }
}

export default Post
