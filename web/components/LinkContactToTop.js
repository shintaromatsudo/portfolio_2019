import Router from 'next/router'
import PageLink from './PageLink'

const LinkTop = props => {
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
  const click = (colorId, colorClass, pathname) => {
    const elm = document.getElementById(colorId)
    elm.classList.add(colorClass)
    setTimeout(function() {
      Router.push({ pathname: pathname })
    }, 500)
  }
  const url = props.url

  const hoverTop = () => {
    hover('top', 'color', 'hoverTop', 'hoverColor')
  }
  const leaveTop = () => {
    leave('top', 'color', 'hoverTop', 'hoverColor')
  }
  const clickTop = () => {
    click('color', 'clickColor', '/' + url)
  }

  let backgroundColor
  switch (url) {
    case 'home':
      backgroundColor = '#00a968'
      break
    case 'about':
      backgroundColor = '#e95295'
      break
    case 'blog':
      backgroundColor = '#f08300'
      break
  }

  return (
    <React.Fragment>
      <div onClick={clickTop} onMouseEnter={hoverTop} onMouseLeave={leaveTop}>
        <div
          id="color"
          className="color"
          style={{ backgroundColor: backgroundColor }}
        />
        <div id="top">
          <PageLink name={props.url.toUpperCase()} />
        </div>
      </div>
      <style jsx>{`
        #top {
          position: fixed;
          top: -70px;
          left: 45%;
        }
        .hoverTop {
          animation: bounceTop 0.5s linear 0s;
          animation-fill-mode: forwards;
        }
        .color {
          position: fixed;
          bottom: 100%;
          width: 100vw;
          height: 100vh;
          z-index: 100;
          cursor: pointer;
        }
        .hoverColor {
          animation: bounceColor 0.5s linear 0s;
          animation-fill-mode: forwards;
        }
        .clickColor {
          animation: fillColor 0.5s linear 0s;
          animation-fill-mode: forwards;
        }
        @keyframes bounceTop {
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
        @keyframes bounceColor {
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
        @keyframes fillColor {
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

export default LinkTop
