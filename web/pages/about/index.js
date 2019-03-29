import React from 'react'
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
    <p>About</p>
    <AboutLink id={'skills'} href={'/about/skills'} name={'SKILLS'} />
    <AboutLink id={'works'} href={'/about/works'} name={'WORKS'} />
    <AboutLink id={'gallery'} href={'/about/gallery'} name={'GALLERY'} />
    <LinkHome />
    <LinkContact />
    <style jsx>{``}</style>
  </React.Fragment>
)

export default About
