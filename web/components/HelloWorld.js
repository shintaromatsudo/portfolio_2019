import React from 'react'

class HelloWorld extends React.Component {
  constructor(props) {
    super(props)
    this.hw = this.hw.bind(this)
  }
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
        h1.style.color = `hsl(${h}, 100%, 50%)`
        h1.innerHTML = text[random]
        await this.sleep(10)
      }
    }
    h1.classList.remove('fadeInOut')
  }

  sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms * 1000))
  }

  render() {
    return (
      <React.Fragment>
        <div id="topImg" />
        <h1 id="h1" />
        <style jsx>{`
          #topImg {
            position: fixed;
            width: 100%;
            background-image: url('../static/img/Top.png');
            background-size: cover;
            background-position: center;
          }
          @media screen and (max-width: 500px) {
            h1 {
              transform: rotate(90deg);
              width: 100%;
              height: 3rem;
              position: fixed;
              top: 0;
              bottom: 0;
              left: 0;
              right: 0;
              margin: auto;
              font-size: 10vw;
              font-weight: bold;
              text-shadow: 7px 7px 1px #dddddd;
              text-align: center;
              z-index: 50;
            }
          }
          @media screen and (min-width: 501px) {
            h1 {
              width: 80%;
              height: 130px;
              position: fixed;
              top: 0;
              bottom: 0;
              left: 0;
              right: 0;
              margin: auto;
              font-size: 7vw;
              font-weight: bold;
              text-shadow: 7px 7px 1px #dddddd;
              text-align: center;
              z-index: 50;
            }
          }
          .fadeInOut {
            animation: fadeInOut 10s;
            animation-iteration-count: infinite;
          }
          @keyframes fadeInOut {
            0% {
              opacity: 0;
            }
            15% {
              opacity: 1;
            }
            85% {
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
