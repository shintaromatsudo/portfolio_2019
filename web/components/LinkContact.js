import Router from 'next/router'
import { connect } from 'react-redux'
import PageLink from './PageLink'
import { contactToTop } from '../actions'

const LinkContact = props => {
  const hover = (
    pageId,
    colorId,
    pageHover,
    pageLeave,
    colorHover,
    colorLeave
  ) => {
    const page = document.getElementById(pageId)
    const color = document.getElementById(colorId)
    page.classList.add(pageHover)
    color.classList.add(colorHover)
    page.classList.remove(pageLeave)
    color.classList.remove(colorLeave)
  }
  const leave = (
    pageId,
    colorId,
    pageHover,
    pageLeave,
    colorHover,
    colorLeave
  ) => {
    const page = document.getElementById(pageId)
    const color = document.getElementById(colorId)
    page.classList.add(pageLeave)
    color.classList.add(colorLeave)
    page.classList.remove(pageHover)
    color.classList.remove(colorHover)
  }
  const hoverContact = () => {
    hover(
      'contactButton',
      'blue',
      'hoverContact',
      'leaveContact',
      'hoverBlue',
      'leaveBlue'
    )
  }
  const leaveContact = () => {
    leave(
      'contactButton',
      'blue',
      'hoverContact',
      'leaveContact',
      'hoverBlue',
      'leaveBlue'
    )
  }

  const click = (colorId, colorClass, pathname) => {
    const elm = document.getElementById(colorId)
    elm.classList.add(colorClass)
    props.dispatch(contactToTop(props.url))
    console.log(props)
    setTimeout(function() {
      Router.push({ pathname: pathname })
    }, 500)
  }
  const clickContact = () => {
    click('blue', 'clickBlue', '/contact')
  }

  return (
    <React.Fragment>
      <div
        onClick={clickContact}
        onMouseEnter={hoverContact}
        onMouseLeave={leaveContact}
      >
        <div id="blue" className="blue" />
        <div id="contactButton">
          <PageLink name="Contact" />
        </div>
      </div>
      <style jsx>{`
        #contactButton {
          position: fixed;
          bottom: -10%;
          left: 50%;
          margin-left: -75px;
          z-index: 50;
        }
        .hoverContact {
          animation: bounceContact 0.5s linear 0s;
          animation-fill-mode: forwards;
        }
        .leaveContact {
          animation: bounceContactReturn 0.5s linear 0s;
          animation-fill-mode: forwards;
        }
        .blue {
          position: fixed;
          top: 100%;
          width: 100vw;
          height: 100vh;
          z-index: 100;
          cursor: pointer;
          background-color: #2ca9e1;
        }
        .hoverBlue {
          animation: bounceBlue 0.5s linear 0s;
          animation-fill-mode: forwards;
        }
        .leaveBlue {
          animation: bounceBlueReturn 0.5s linear 0s;
          animation-fill-mode: forwards;
        }
        .clickBlue {
          animation: fillBlue 0.5s linear 0s;
          animation-fill-mode: forwards;
        }
        @keyframes bounceContact {
          0% {
            transform: translateaY(-0%);
          }
          5% {
            transform: translateY(-20%);
          }
          30% {
            transform: translateY(-10%);
          }
          50% {
            transform: translateY(-17%);
          }
          75% {
            transform: translateY(-13%);
          }
          100% {
            transform: translateY(-15%);
          }
        }
        @keyframes bounceContactReturn {
          0% {
            transform: translateaY(-15%);
          }
          5% {
            transform: translateY(5%);
          }
          30% {
            transform: translateY(-5%);
          }
          50% {
            transform: translateY(2%);
          }
          75% {
            transform: translateY(-2%);
          }
          100% {
            transform: translateY(0%);
          }
        }
        @keyframes bounceBlue {
          0% {
            top: 100%;
          }
          5% {
            top: 95%;
          }
          30% {
            top: 97%;
          }
          50% {
            top: 95.5%;
          }
          75% {
            top: 96.5%;
          }
          100% {
            top: 96%;
          }
        }
        @keyframes bounceBlueReturn {
          0% {
            top: 96%;
          }
          5% {
            top: 101%;
          }
          30% {
            top: 99%;
          }
          50% {
            top: 100.5%;
          }
          75% {
            top: 99.5%;
          }
          100% {
            top: 100%;
          }
        }
        @keyframes fillBlue {
          0% {
            top: 96%;
          }
          100% {
            top: 0%;
          }
        }
      `}</style>
    </React.Fragment>
  )
}

export default connect(state => state)(LinkContact)
