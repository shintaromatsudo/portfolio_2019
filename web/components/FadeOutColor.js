const FadeOutColor = props => (
  <div>
    <div className="color" style={props.style} />
    <style jsx>{`
      .color {
        position: absolute;
        top: 0;
        right: 0;
        width: 100vw;
        height: 100vh;
        z-index: 100;
        visibility: visible;
        animation: fadeOut 0.3s linear 0s;
        animation-fill-mode: forwards;
      }
      @keyframes fadeOut {
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

export default FadeOutColor
