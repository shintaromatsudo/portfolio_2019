import Router from 'next/router'
import PageLink from './PageLink'

const LinkHome = props => {
  const hover = (pageId, colorId, pageClass, colorClass) => {
    const page = document.getElementById(pageId)
    const color = document.getElementById(colorId)
    page.classList.add(pageClass)
    color.classList.add(colorClass)
  }
  const leave = (pageId, colorId, pageClass, colorClass) => {
    const page = document.getElementById(pageId)
    const color = document.getElementById(colorId)
    page.classList.remove(pageClass)
    color.classList.remove(colorClass)
  }
  const hoverHome = () => {
    hover('homeButton', 'green', 'hoverHome', 'hoverGreen')
  }
  const leaveHome = () => {
    leave('homeButton', 'green', 'hoverHome', 'hoverGreen')
  }

  const click = (colorId, colorClass, pathname) => {
    const elm = document.getElementById(colorId)
    elm.classList.add(colorClass)
    setTimeout(function() {
      Router.push({ pathname: pathname })
    }, 500)
  }
  const clickHome = () => {
    click('green', 'clickGreen', '/home')
  }

  return (
    <React.Fragment>
      <div
        onClick={clickHome}
        onMouseEnter={hoverHome}
        onMouseLeave={leaveHome}
      >
        <div id="green" className="green" />
        <div id="homeButton" style={props.homeStyle}>
          <PageLink name="Home" />
        </div>
      </div>
      <style jsx>{`
        #homeButton {
          position: fixed;
          right: -50px;
          top: 35%;
          transform: rotate(-90deg);
        }
        .hoverHome {
          animation: bounceHome 0.5s linear 0s;
          animation-fill-mode: forwards;
        }
        .green {
          position: fixed;
          top: 0;
          left: 100%;
          width: 100vw;
          height: 100vh;
          z-index: 100;
          cursor: pointer;
          background-color: #00a968;
        }
        .hoverGreen {
          animation: bounceGreen 0.5s linear 0s;
          animation-fill-mode: forwards;
        }
        .clickGreen {
          animation: fillGreen 0.5s linear 0s;
          animation-fill-mode: forwards;
        }
        @keyframes bounceHome {
          0% {
            transform: translateaX(0%) rotate(-90deg);
          }
          5% {
            transform: translateX(-50%) rotate(-90deg);
          }
          30% {
            transform: translateX(-30%) rotate(-90deg);
          }
          50% {
            transform: translateX(-45%) rotate(-90deg);
          }
          75% {
            transform: translateX(-35%) rotate(-90deg);
          }
          100% {
            transform: translateX(-40%) rotate(-90deg);
          }
        }
        @keyframes bounceGreen {
          0% {
            left: 100%;
          }
          5% {
            left: 95%;
          }
          30% {
            left: 97%;
          }
          50% {
            left: 95.5%;
          }
          75% {
            left: 96.5%;
          }
          100% {
            left: 96%;
          }
        }
        @keyframes fillGreen {
          0% {
            left: 96%;
          }
          100% {
            left: 0%;
          }
        }
      `}</style>
    </React.Fragment>
  )
}

export default LinkHome
