import React from 'react'
import PropTypes from 'prop-types'
import Button from './Button'

const Blog = ({ props }) => {
  console.log(props)
  const { title, content } = props
  return (
    <div>
      <Button href="admin/post" name="Post" {...props} />
      <h2>{title}</h2>
      <p>{content}</p>
    </div>
  )
}

Blog.propTypes = {
  // id: Proptypes.intefer.isRequired,
  title: PropTypes.string.isRequired,
  content: PropTypes.string.isRequired
}

export default Blog
