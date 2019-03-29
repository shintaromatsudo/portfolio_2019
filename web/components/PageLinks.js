import Router from 'next/router'
import PageLink from './PageLink'
import LinkContact from './LinkContact'

const PageLinks = () => {
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
  const hoverAbout = () => {
    hover('about', 'pink', 'hoverAbout', 'hoverPink')
  }
  const leaveAbout = () => {
    leave('about', 'pink', 'hoverAbout', 'hoverPink')
  }

  const hoverBlog = () => {
    hover('blog', 'orange', 'hoverBlog', 'hoverOrange')
  }

  const leaveBlog = () => {
    leave('blog', 'orange', 'hoverBlog', 'hoverOrange')
  }

  const click = (colorId, colorClass, pathname) => {
    const elm = document.getElementById(colorId)
    elm.classList.add(colorClass)
    setTimeout(function() {
      Router.push({ pathname: pathname })
    }, 500)
  }
  const clickAbout = () => {
    click('pink', 'clickPink', '/about')
  }

  const clickBlog = () => {
    click('orange', 'clickOrange', '/blog')
  }

  return (
    <React.Fragment>
      <div
        onClick={clickAbout}
        onMouseEnter={hoverAbout}
        onMouseLeave={leaveAbout}
      >
        <div id="pink" className="pink" />
        <div id="about">
          <PageLink name="About" />
        </div>
      </div>
      <div
        onClick={clickBlog}
        onMouseEnter={hoverBlog}
        onMouseLeave={leaveBlog}
      >
        <div id="orange" className="orange" />
        <div id="blog">
          <PageLink name="Blog" />
        </div>
      </div>
      <LinkContact />
      <style jsx>{`
        #about {
          position: fixed;
          left: -50px;
          top: 45%;
          transform: rotate(90deg);
        }
        #blog {
          position: fixed;
          right: -50px;
          top: 45%;
          transform: rotate(-90deg);
        }
        .hoverAbout {
          animation: bounceAbout 0.5s linear 0s;
          animation-fill-mode: forwards;
        }
        .hoverBlog {
          animation: bounceBlog 0.5s linear 0s;
          animation-fill-mode: forwards;
        }
        .pink {
          position: absolute;
          top: 0;
          right: 100%;
          width: 100vw;
          height: 100vh;
          z-index: 100;
          cursor: pointer;
          background-color: #e95295;
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
        }
        .hoverPink {
          animation: bouncePink 0.5s linear 0s;
          animation-fill-mode: forwards;
        }
        .hoverOrange {
          animation: bounceOrange 0.5s linear 0s;
          animation-fill-mode: forwards;
        }
        .clickPink {
          animation: fillPink 0.5s linear 0s;
          animation-fill-mode: forwards;
        }
        .clickOrange {
          animation: fillOrange 0.5s linear 0s;
          animation-fill-mode: forwards;
        }
        @keyframes bounceAbout {
          0% {
            transform: translateaX(0%) rotate(90deg);
          }
          5% {
            transform: translateX(50%) rotate(90deg);
          }
          30% {
            transform: translateX(30%) rotate(90deg);
          }
          50% {
            transform: translateX(45%) rotate(90deg);
          }
          75% {
            transform: translateX(35%) rotate(90deg);
          }
          100% {
            transform: translateX(40%) rotate(90deg);
          }
        }
        @keyframes bounceBlog {
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
        @keyframes bouncePink {
          0% {
            right: 100%;
          }
          5% {
            right: 95%;
          }
          30% {
            right: 97%;
          }
          50% {
            right: 95.5%;
          }
          75% {
            right: 96.5%;
          }
          100% {
            right: 96%;
          }
        }
        @keyframes bounceOrange {
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
        @keyframes fillPink {
          0% {
            right: 96%;
          }
          100% {
            right: 0%;
          }
        }
        @keyframes fillOrange {
          0% {
            left: 96%;
            opacity: 1;
          }
          90% {
            left: 0%;
            opacity: 1;
          }
          100% {
            left: 0%;
            opacity: 0;
          }
        }
      `}</style>
    </React.Fragment>
  )
}

export default PageLinks
