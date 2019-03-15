import React from 'react'
import Blogs from '../../containers/Blogs'

class Blog extends React.Component {
  render() {
    return (
      <div className="Blog">
        <h2>BLOG</h2>
        <Blogs />
        <style jsx>{`
          .Blog {
            margin: 50px;
          }
        `}</style>
      </div>
    )
  }
}

export default Blog
