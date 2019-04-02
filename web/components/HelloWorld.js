import React from 'react'

class HelloWorld extends React.Component {
  componentDidMount() {
    this.hw()
  }

  // componentWillReceiveProps(nextProps) {
  //   if (nextProps.location !== this.props.location) {
  //     this.hw()
  //   }
  // }

  // componentWillUnmount() {}

  async hw() {
    const text = new Array(
      'Hello World',
      '世界のみなさん こんにちは',
      'Bonjour le monde',
      'Hallo Welt',
      '',
      '',
      '',
      '',
      '',
      '',
      '',
      '',
      '',
      '',
      'مرحبا بالعالم',
      'नमस्ते दुनिया'
    )
    const h1 = document.getElementById('h1')
    const randoms = []
    for (let i = 0; randoms.length < text.length; i++) {
      const random = Math.floor(Math.random() * text.length)
      if (!randoms.includes(random)) {
        console.log(random)
        console.log(text[random])
        randoms.push(random)
        h1.innerHTML = text[random]
        await this.sleep(5000)
      }
    }
  }

  sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms))
  }

  render() {
    return (
      <React.Fragment>
        <div className="helloWorld">
          <h1 id="h1" />
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
