import React from 'react'
import Greeting from '../../components/Greeting'
import Skills from '../../components/Skills'
import Works from '../../components/Works'
import Gallery from '../../components/Gallery'
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
      <h2>About</h2>
      <ChangeContentButton />
      <div id="ContentGreeting" className="">
        <Greeting />
      </div>
      <div id="ContentSkills" className="v-hidden">
        <Skills />
      </div>
      <div id="ContentWorks" className="v-hidden">
        <Works />
      </div>
      <div id="ContentGallery" className="v-hidden">
        <Gallery />
      </div>
      <LinkHome />
      <LinkContact url={'about'} />
      <style jsx>{`
        .v-hidden {
          visibility: hidden;
        }
      `}</style>
    </React.Fragment>
  )

export default About
