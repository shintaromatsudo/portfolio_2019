import React from 'react'
import Greeting from '../../components/Greeting'
import Skills from '../../components/Skills'
import Works from '../../components/Works'
// import Gallery from '../../components/Gallery'
import ChangeContentButton from '../../components/ChangeContentButton'
import AboutLink from '../../components/AboutLink'
import LinkHome from '../../components/LinkAboutToHome'
import LinkContact from '../../components/LinkContact'
import FadeOutColor from '../../components/FadeOutColor'

const style = {
  backgroundColor: '#e95295'
}

const About = () => (
  <React.Fragment>
    <FadeOutColor style={style} />
    <div className="mainAbout">
      <ChangeContentButton />
      <div id="ContentGreeting" className="">
        <Greeting />
      </div>
      <div id="ContentSkills" className="d-none">
        <Skills />
      </div>
      <div id="ContentWorks" className="d-none">
        <Works />
      </div>
      <div id="ContentGallery" className="d-none">
        {/* <Gallery /> */}
      </div>
    </div>
    <LinkHome />
    <LinkContact url={'about'} />
    <style jsx>{`
      .mainAbout {
        width: 1000px;
        margin: auto;
      }
      .d-none {
        display: none;
      }
    `}</style>
  </React.Fragment>
)

export default About
