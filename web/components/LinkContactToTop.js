import Router from 'next/router'
import PageLink from './PageLink'

const LinkTop = props => {
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
  const click = (colorId, colorClass, pathname) => {
    const elm = document.getElementById(colorId)
    elm.classList.add(colorClass)
    setTimeout(function() {
      Router.push({ pathname: pathname })
    }, 500)
  }
  const url = props.url

  const hoverTop = () => {
    hover('top', 'color', 'hoverTop', 'leaveTop', 'hoverColor', 'leaveColor')
  }
  const leaveTop = () => {
    leave('top', 'color', 'hoverTop', 'leaveTop', 'hoverColor', 'leaveColor')
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
          top: -7%;
          left: 50%;
          margin-left: -75px;
        }
        .hoverTop {
          animation: bounceTop 0.5s linear 0s;
          animation-fill-mode: forwards;
        }
        .leaveTop {
          animation: bounceTopReturn 0.5s linear 0s;
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
        .leaveColor {
          animation: bounceColorReturn 0.5s linear 0s;
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
        @keyframes bounceTopReturn {
          0% {
            transform: translateaY(15%);
          }
          5% {
            transform: translateY(-7%);
          }
          30% {
            transform: translateY(7%);
          }
          50% {
            transform: translateY(-2%);
          }
          75% {
            transform: translateY(2%);
          }
          100% {
            transform: translateY(0%);
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
        @keyframes bounceColorReturn {
          0% {
            bottom: 96%;
          }
          5% {
            bottom: 101%;
          }
          30% {
            bottom: 99%;
          }
          50% {
            bottom: 100.5%;
          }
          75% {
            bottom: 99.5%;
          }
          100% {
            bottom: 100%;
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
