import Link from 'next/link'
import AboutLink from '../../components/AboutLink'
import LinkHome from './LinkHome'
import LinkContact from './LinkContact'
import FadeOutColor from './FadeOutColor'

// const style = {
//   backgroundColor: #e95295;
// }

const About = () => (
  <div>
    <FadeOutColor />
    <p>About</p>
    <AboutLink href={'/about/skills'} name={'SKILLS'} />
    <AboutLink href={'/about/works'} name={'WORKS'} />
    <AboutLink href={'/about/gallery'} name={'GALLERY'} />
    <LinkContact />
    <style jsx>{`
      .FadeOutColor {
        background-color: #e95295;
      }
    `}</style>
  </div>
)

export default About
