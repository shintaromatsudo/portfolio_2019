import React from 'react'
import PropTypes from 'prop-types'
import { Link } from '../routes'

const Blog = props => {
  const { id, title, content } = props

  return (
    <React.Fragment>
      <div className="blog">
        <h3>{title}</h3>
        <p>{content}</p>
        <div className="more">
          <Link
            as={`blog/${title}`}
            href={`blog/detail?title=${title}&content=${content}`}
          >
            <a>MORE</a>
          </Link>
        </div>
      </div>
      <style jsx>{`
        .blog {
          width: 200px;
          height: 200px;
          border: 1px solid black;
          border-radius: 5px;
        }
        .more {
          width: 50px;
          margin-left: auto;
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
