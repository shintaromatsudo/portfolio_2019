import React from 'react'
import FadeOutColor from '../components/FadeOutColor'
import PageLinks from '../components/PageLinks'
import HelloWorld from '../components/HelloWorld'

const style = {
  backgroundColor: '#00a968'
}

const Home = () => (
  <div id="home">
    <FadeOutColor style={style} />
    <div className="home">
      <PageLinks url={'home'} />
      <HelloWorld />
    </div>
    <style jsx>{`
      #home {
        background-color: #7ebea5;
      }
    `}</style>
  </div>
)

export default Home
