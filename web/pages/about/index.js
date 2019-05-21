import React from 'react'
import Greeting from '../../components/Greeting'
import Career from '../../components/Career'
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
  <div id="about">
    <FadeOutColor style={style} />
    <div className="mainAbout">
      <ChangeContentButton />
      <div className="contentAbout">
        <div id="ContentGreeting" className="">
          <Greeting />
        </div>
        <div id="ContentCareer" className="d-none">
          <Career />
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
    </div>
    <LinkHome />
    <LinkContact url={'about'} />
    <style jsx>{`
      #about {
        width: 100vw;
        height: 100vh;
        background-color: #f6bfbc;
      }
      .mainAbout {
        display: flex;
      }
      .contentAbout {
        margin: auto 0;
      }
      .d-none {
        display: none;
      }
    `}</style>
  </div>
)

export default About
