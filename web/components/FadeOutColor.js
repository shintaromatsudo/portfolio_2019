import React from 'react'

class FadeOutColor extends React.Component {
  constructor(props) {
    super(props)
    this.addClass = this.addClass.bind(this)
  }

  componentDidMount() {
    this.addClass()
  }

  addClass() {
    const fadeOutColor = document.getElementById('fadeOutColor')
    fadeOutColor.classList.add('fadeOutColor')
  }

  render() {
    return (
      <div>
        <div id="fadeOutColor" className="color" style={this.props.style} />
        <style jsx>{`
          .color {
            position: absolute;
            top: 0;
            right: 0;
            width: 100vw;
            height: 100vh;
            z-index: 100;
            visibility: visible;
          }
          .fadeOutColor {
            animation: fadeOut 0.5s linear 0s;
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
  }
}

export default FadeOutColor
