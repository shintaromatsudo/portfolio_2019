import React from 'react'
import Blogs from '../../containers/Blogs'
import LinkHome from '../../components/LinkBlogToHome'
import LinkContact from '../../components/LinkContact'
import FadeOutColor from '../../components/FadeOutColor'

const style = {
  backgroundColor: '#f08300'
}

const Blog = () => (
  <div id="blog">
    <FadeOutColor style={style} />
    <div className="blog">
      <h2>BLOG</h2>
      <Blogs />
    </div>
    <LinkHome />
    <LinkContact url={'blog'} />
    <style jsx>{`
      #blog {
        position: fixed;
        width: 100%;
        background-color: #f7b977;
      }
      // .blog {
      //   width: 80%;
      // }
      h2 {
        padding: 50px;
      }
    `}</style>
  </div>
)

export default Blog
