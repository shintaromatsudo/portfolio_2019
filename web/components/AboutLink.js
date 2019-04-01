import React from 'react'
import Link from 'next/link'

const AboutLink = props => {
  const click = () => {
    document.getElementById(props.id).click()
  }

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
    <div
      id="aboutLink"
      onClick={click}
      onMouseEnter={hover}
      onMouseLeave={leave}
    >
      <Link href={props.href}>
        <a id={props.id}>{props.name}</a>
      </Link>
      <style jsx>{`
        #aboutLink {
          width: 100px;
          height 100px;
          background-color: white;
          border: 4px solid black;
          border-radius: 50%;
          display: flex;
          justify-content: center;
          align-items: center;
          cursor: pointer;
          transition: all 0.3s;
        }
        #aboutLink :hover {
          color: white;
          background-color: black;
          border: 4px solid white;
        }
        a {
          color: black;
          text-decoration: none;
          font-weight: bold;
        }
        #aboutLink :hover a {
          color: white;
          text-decoration: none;
          font-weight: bold;
        }
      `}</style>
    </div>
  )
}

export default AboutLink
