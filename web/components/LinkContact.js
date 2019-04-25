import Router from 'next/router'
import PageLink from './PageLink'

const LinkContact = props => {
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
  const hoverContact = () => {
    hover('contact', 'blue', 'hoverContact', 'hoverBlue')
  }
  const leaveContact = () => {
    leave('contact', 'blue', 'hoverContact', 'hoverBlue')
  }

  const click = (colorId, colorClass, pathname) => {
    const elm = document.getElementById(colorId)
    elm.classList.add(colorClass)
    const url = props.url
    sessionStorage.setItem('url', url)
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
        <div id="contact">
          <PageLink name="Contact" />
        </div>
      </div>
      <style jsx>{`
        #contact {
          position: absolute;
          left: 45%;
          bottom: -70px;
        }
        .hoverContact {
          animation: bounceContact 0.5s linear 0s;
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
        .clickBlue {
          animation: fillBlue 0.5s linear 0s;
          animation-fill-mode: forwards;
        }
        @keyframes bounceContact {
          0% {
            transform: translateaY(-0%);
          }
          5% {
            transform: translateY(-22%);
          }
          30% {
            transform: translateY(-8%);
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

export default LinkContact
