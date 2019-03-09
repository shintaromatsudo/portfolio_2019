import React from 'react'
import PropTypes from 'prop-types'

const Blog = ({ title, content }) => (
  <React.Fragment>
    <li>{title}</li>
    <li>{content}</li>
  </React.Fragment>
)

Blog.propTypes = {
  title: PropTypes.string.isRequired,
  content: PropTypes.string.isRequired
}

export default Blog
