import React from 'react'
import Link from 'next/link'

const AboutLink = props => {
   const hover = () => {
    const scrollToTop = document.getElementById('aboutLink')
    scrollToTop.classList.add('hover')
    scrollToTop.classList.remove('leave')
  }

  const leave = () => {
    const scrollToTop = document.getElementById('aboutLink')
    scrollToTop.classList.add('leave')
    scrollToTop.classList.remove('hover')
  }
  return (
    <React.Fragment>
    <div id="aboutLink"
        onMouseEnter={hover}
        onMouseLeave={leave}>
      <Link href={props.href}>
        <a>{props.name}</a>
      </Link>
    </div>
    <style jsx>{`
    #aboutLink {
      width: 50px;
      height 50px;
      color: black;
      background-color: white;
      border: 2px solid black;
      border-radius: 50%;
      transition: all 0.3s;
    }
    #aboutLink :hover {
      color: white;
      background-color: black;
      border: 2px solid white;
    }
    a {
      color: black;
      text-decoration: none;
      font-weight: bold;
    }
  `}</style>
  </React.Fragment>
)
}

export default AboutLink
