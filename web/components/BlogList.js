import React from 'react'

const BlogList = props => {
  // const { title, content } = store.getState()
  console.log('blogList', props)
  return (
    <div>
      <h2>{props.title}</h2>
      <p>content</p>
    </div>
  )
}

export default BlogList
