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
      'こんにちは 世界',
      'Bonjour le monde',
      'Hallo Welt',
      'Hola Mundo',
      'Olá Mundo',
      'Hallo Wereld',
      'Ahoj světe',
      'Привет мир',
      'Dia duit an Domhain',
      'Γειά σου Κόσμε',
      'Saluton Mondo',
      'שלום עולם',
      'مرحبا بالعالم',
      'Selam Dünya',
      'Salamu, Dunia',
      'Hello Wêreld',
      'नमस्ते दुनिया',
      // 'Chào thế giới',
      'สวัสดีชาวโลก',
      'Hai dunia',
      'Salom Dunyo',
      '안녕하세요',
      '你好 世界'
    )
    const h1 = document.getElementById('h1')
    const randoms = []
    for (let i = 0; randoms.length < text.length; i++) {
      const random = Math.floor(Math.random() * text.length)
      if (!randoms.includes(random)) {
        console.log(random)
        console.log(text[random])
        randoms.push(random)
        h1.classList.add('fadeInOut')
        const h = Math.random() * 360
        h1.style.color = `hsl(${h}, 80%, 60%)`
        h1.innerHTML = text[random]
        await this.sleep(5000)
      }
    }
    h1.classList.remove('fadeInOut')
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
            font-size: 8vw;
            text-shadow: 5px 5px 1px #999999, -5px -5px 1px #999999;
          }
          .fadeInOut {
            animation: fadeInOut 5s;
            animation-iteration-count: infinite;
          }
          @keyframes fadeInOut {
            0% {
              opacity: 0;
            }
            25% {
              opacity: 1;
            }
            75% {
              opacity: 1;
            }
            100% {
              opacity: 0;
            }
          }
        `}</style>
      </React.Fragment>
    )
  }
}

export default HelloWorld
