import React from 'react'
import PropTypes from 'prop-types'

const Blog = ({ title, content }) => (
  <div>
    <h2>{title}</h2>
    <p>{content}</p>
  </div>
)

Blog.propTypes = {
  title: PropTypes.string.isRequired,
  content: PropTypes.string.isRequired
}

export default Blog
