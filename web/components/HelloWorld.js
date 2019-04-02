import React from 'react'

class HelloWorld extends React.Component {
  componentDidMount() {
    this.hw()
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.location !== this.props.location) {
      this.hw()
    }
  }

  async hw() {
    const text = new Array('Hello World', 'こんにちは')
    const h1 = document.getElementById('h1')
    console.log(text)
    for (let i = 0; i < text.length; i++) {
      console.log(text[i])
      h1.innerHTML = text[i]
      await new Promise(r => setTimeout(r,2000))
    }
  }

  render() {
    return (
      <React.Fragment>
        <div className="helloWorld">
          <h1 id="h1">Hello World</h1>
        </div>
        <style jsx>{`
          .helloWorld {
            width: 100vw;
            height: 100vh;
            display: flex;
            justify-content: center;
            align-items: center;
          }
          h1 {
          }
        `}</style>
      </React.Fragment>
    )
  }
}

export default HelloWorld
