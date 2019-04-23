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
    <PageLinks url={'home'} />
    <HelloWorld />
  </React.Fragment>
)

export default Home
