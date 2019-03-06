import React from 'react'

const BlogList = props => {
  // const { title, content } = store.getState()
  console.log('blogList', props)
  return (
    <div>
      <h2>{props.form.title}</h2>
      <p>{props.form.content}</p>
    </div>
  )
}

export default BlogList
