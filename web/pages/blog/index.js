import React from 'react'
import { connect } from 'react-redux'
import Blogs from '../../containers/Blogs'

class Blog extends React.Component {
  render() {
    return (
      <div className="Blog">
        <h2>BLOG</h2>
        <Blogs />
      </div>
    )
  }
}

export default Blog
