import React from 'react'
import Blogs from '../../containers/Blogs'

class Blog extends React.Component {
  render() {
    return (
      <div className="Blog">
        <div className="orange" />
        <h2>BLOG</h2>
        <Blogs />
        <style jsx>{`
          .Blog {
            margin: 50px;
          }
          .orange {
          position: fixed;
          top: 0;
          left: 100%;
          width: 100vw;
          height: 100vh;
          z-index: 100;
          cursor: pointer;
          background-color: #f08300;
        visibility: visible;
        animation: fadeOrange 0.3s linear 0s;
        animation-fill-mode: forwards;
        }
         @keyframes fadeOrange {
        0% {
          opacity: 1;
          visibility: visible;
        }
        100% {
          opacity: 0;
          visibility: hidden;
        }
        }
        `}</style>
      </div>
    )
  }
}

export default Blog
