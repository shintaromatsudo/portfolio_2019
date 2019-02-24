import React from 'react'
import Button from '../../components/Button'
import BlogList from '../../components/BlogList'

class Post extends React.Component {
  render() {
    return (
      <div>
        <Button href="admin/post" name="Post" />
        <BlogList store={this.props.store} />
      </div>
    )
  }
}

export default Post
