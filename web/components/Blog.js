import React from 'react'
import PropTypes from 'prop-types'
import { Link } from '../routes'

const Blog = props => {
  const { id, title, content } = props

  return (
    <React.Fragment>
      <div className="blog">
        <h2>{title}</h2>
        <p>{content}</p>
        <Link
          as={`blog/${title}`}
          href={`blog/detail?title=${title}&content=${content}`}
        >
          <a>MORE</a>
        </Link>
      </div>
      <style jsx>{`
        .blog {
          height: 300px;
          border: 1px solid black;
          border-radius: 5px;
        }
        p {
          color: red;
        }
        a {
          text-decoration: none;
        }
      `}</style>
    </React.Fragment>
  )
}

Blog.propTypes = {
  title: PropTypes.string.isRequired,
  content: PropTypes.string.isRequired
}

export default Blog
