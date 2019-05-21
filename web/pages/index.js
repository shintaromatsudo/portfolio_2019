import React from 'react'
import FadeOutColor from '../components/FadeOutColor'
import PageLinks from '../components/PageLinks'
import HelloWorld from '../components/HelloWorld'

const style = {
  backgroundColor: '#00a968'
}

const Home = () => (
  <React.Fragment>
    <FadeOutColor style={style} />
    <div id="home">
      <PageLinks url={'home'} />
      <HelloWorld />
    </div>
    <style jsx>{`
      #home {
        width: 100vw;
        height: 100vh;
        background-color: #7ebea5;
      }
    `}</style>
  </React.Fragment>
)

export default Home
