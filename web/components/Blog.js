import React from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import { Link, Router } from '../routes'
import { detailData } from '../actions'

const Blog = props => {
  const { id, title, content } = props
  console.log(props)

//  const onClick = e => {
//    e.preventDefault()
//    props.detailData(id)
//    console.log(id)
//    Router.pushRoute(`/blog/${id}`)
//  }

  return (
    <div>
      <h2>{title}</h2>
      <p>{content}</p>
//      <button onClick={onClick}>MORE</button>
      <Link as={`/${id`} href={`detail?title=${title}&content=${content}`}><a>MORE</a></Link>
//      <Link href={{ pathname:'blog/detail', query:{${title}, ${content}} as='blog/${id}'><a>MORE</a></Link>
    </div>
  )
}

Blog.propTypes = {
  title: PropTypes.string.isRequired,
  content: PropTypes.string.isRequired
}

const mapDispatchToProps = dispatch => ({
  detailData: () => dispatch(detailData())
})

export default connect(
  null,
  mapDispatchToProps
)(Blog)
