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
    hover('home', 'green', 'hoverHome', 'hoverGreen')
  }
  const leaveHome = () => {
    leave('home', 'green', 'hoverHome', 'hoverGreen')
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
        <div id="home" style={props.homeStyle}>
          <PageLink name="Home" />
        </div>
      </div>
      <style jsx>{`
        #home {
          position: fixed;
          top: -70px;
          left: 45%;
        }
        .hoverHome {
          animation: bounceHome 0.5s linear 0s;
          animation-fill-mode: forwards;
        }
        .green {
          position: fixed;
          bottom: 100%;
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
            transform: translateaY(0%);
          }
          5% {
            transform: translateY(22%);
          }
          30% {
            transform: translateY(8%);
          }
          50% {
            transform: translateY(17%);
          }
          75% {
            transform: translateY(13%);
          }
          100% {
            transform: translateY(15%);
          }
        }
        @keyframes bounceGreen {
          0% {
            bottom: 100%;
          }
          5% {
            bottom: 95%;
          }
          30% {
            bottom: 97%;
          }
          50% {
            bottom: 95.5%;
          }
          75% {
            bottom: 96.5%;
          }
          100% {
            bottom: 96%;
          }
        }
        @keyframes fillGreen {
          0% {
            bottom: 96%;
          }
          100% {
            bottom: 0%;
          }
        }
      `}</style>
    </React.Fragment>
  )
}

export default LinkHome
