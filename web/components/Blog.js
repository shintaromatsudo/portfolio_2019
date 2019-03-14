import React from 'react'
import PropTypes from 'prop-types'
import { Link } from '../routes'

const Blog = props => {
  const { id, title, content } = props

  return (
    <div>
      <h2>{title}</h2>
      <p>{content}</p>
      <Link
        as={`blog/${title}`}
        href={`blog/detail?title=${title}&content=${content}`}
      >
        <a>MORE</a>
      </Link>
    </div>
  )
}

Blog.propTypes = {
  title: PropTypes.string.isRequired,
  content: PropTypes.string.isRequired
}

export default Blog
