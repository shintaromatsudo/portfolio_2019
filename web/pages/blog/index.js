import React from 'react'
import Blogs from '../../containers/Blogs'
import LinkHome from '../../components/LinkBlogToHome'
import LinkContact from '../../components/LinkContact'
import FadeOutColor from '../../components/FadeOutColor'

const style = {
  backgroundColor: '#f08300'
}

const Blog = () => (
  <React.Fragment>
    <FadeOutColor style={style} />
    <div className="Blog">
      <h2>BLOG</h2>
      <Blogs />
    </div>
    <LinkHome />
    <LinkContact url={'blog'} />
    <style jsx>{`
      .Blog {
        margin: 50px;
      }
    `}</style>
  </React.Fragment>
)

export default Blog
