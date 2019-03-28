import AboutLink from '../../components/AboutLink'
import Link from 'next/link'

const About = () => (
  <div>
    <div className="pink" />
    <p>About</p>
    <AboutLink href={'/about/skills'} name={'SKILLS'} />
    <AboutLink href={'/about/works'} name={'WORKS'} />
    <AboutLink href={'/about/gallery'} name={'GALLERY'} />
    <style jsx>{`
      .pink {
        position: absolute;
        top: 0;
        right: 0;
        width: 100vw;
        height: 100vh;
        z-index: 100;
        cursor: pointer;
        background-color: #e95295;
        visibility: visible;
        animation: fadePink 0.3s linear 0s;
        animation-fill-mode: forwards;
      }
      @keyframes fadePink {
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

export default About
