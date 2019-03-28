import AboutLink from '../../components/AboutLink'

const About = () => (
  <div>
    <div className="pink" />
    <p>About</p>
    <AboutLink href={"/skills"} name={"Skills"} />
    <AboutLink href={"/works"} name={"Works"} />
    <AboutLink href={"/gallery"} name={"Gallery"} />
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
          animation: fadePink 0.3s linear 0s;
          animation-fill-mode: forwards;
        }
        @keyframes fadePink {
          0% {
            opacity: 1;
          }
          100% {
            opacity: 0;
          }
        }
    `}</style>
  </div>
)

export default About
