import React from 'react'
import Greeting from '../../components/Greeting'
import Career from '../../components/Career'
import Skills from '../../components/Skills'
import Works from '../../components/Works'
// import Gallery from '../../components/Gallery'
import ChangeContentButton from '../../components/ChangeContentButton'
import AboutTitle from '../../components/AboutTitle'
import LinkHome from '../../components/LinkAboutToHome'
import LinkContact from '../../components/LinkContact'
import FadeOutColor from '../../components/FadeOutColor'

const style = {
  backgroundColor: '#e95295'
}

const About = () => {
  return (
    <div id="about">
      <FadeOutColor style={style} />
      <AboutTitle />
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
            {/* <Works /> */}
            <p className="UnderConstruction">Under Construction...</p>
          </div>
          <div id="ContentGallery" className="d-none">
            {/* <Gallery /> */}
            <p className="UnderConstruction">Under Construction...</p>
          </div>
        </div>
      </div>
      <LinkHome />
      <LinkContact url={'about'} />
      <style jsx>{`
        #about {
          position: fixed;
          width: 100%;
          background-color: #fdeff2;
        }
        .mainAbout {
          display: flex;
        }
        .contentAbout {
          width: 100%;
          margin: auto 0;
        }
        .d-none {
          display: none;
        }
        @media screen and (max-width: 500px) {
          .UnderConstruction {
            font-size: 20px;
            text-align: center;
            margin-right: 90px;
          }
        }
        @media screen and (min-width: 501px) {
          .UnderConstruction {
            font-size: 30px;
            text-align: center;
            margin-right: 180px;
          }
        }
      `}</style>
    </div>
  )
}

export default About
