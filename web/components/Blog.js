import React from 'react'
import PropTypes from 'prop-types'
import { Router } from '../routes'

const Blog = props => {
  const { id, title, content } = props

  const onClick = e => {
    e.preventDefault()
    Router.pushRoute(`/blog/${id}`)
  }

  return (
    <div>
      <h2>{title}</h2>
      <p>{content}</p>
      <button onClick={onClick}>MORE</button>
    </div>
  )
}

Blog.propTypes = {
  title: PropTypes.string.isRequired,
  content: PropTypes.string.isRequired
}

export default Blog
