import React from 'react'
import { connect } from 'react-redux'
import { changeAboutTitle } from '../actions'

class ChangeContentButton extends React.Component {
  constructor(props) {
    super(props)
    this.changeContent = this.changeContent.bind(this)
  }

  componentDidMount() {
    this.changeContent()
  }

  changeContent(content) {
    const contentgr = document.getElementById('ContentGreeting')
    const contentc = document.getElementById('ContentCareer')
    const contents = document.getElementById('ContentSkills')
    const contentw = document.getElementById('ContentWorks')
    const contentga = document.getElementById('ContentGallery')
    switch (content) {
      case 'greeting':
        this.props.dispatch(changeAboutTitle('Greeting'))
        contentgr.classList.remove('d-none')
        contentc.classList.add('d-none')
        contents.classList.add('d-none')
        contentw.classList.add('d-none')
        contentga.classList.add('d-none')
        break
      case 'career':
        this.props.dispatch(changeAboutTitle('Career'))
        contentgr.classList.add('d-none')
        contentc.classList.remove('d-none')
        contents.classList.add('d-none')
        contentw.classList.add('d-none')
        contentga.classList.add('d-none')
        break
      case 'skills':
        this.props.dispatch(changeAboutTitle('Skills'))
        contentgr.classList.add('d-none')
        contentc.classList.add('d-none')
        contents.classList.remove('d-none')
        contentw.classList.add('d-none')
        contentga.classList.add('d-none')
        break
      case 'works':
        this.props.dispatch(changeAboutTitle('Works'))
        contentgr.classList.add('d-none')
        contentc.classList.add('d-none')
        contents.classList.add('d-none')
        contentw.classList.remove('d-none')
        contentga.classList.add('d-none')
        break
      case 'gallery':
        this.props.dispatch(changeAboutTitle('Gallery'))
        contentgr.classList.add('d-none')
        contentc.classList.add('d-none')
        contents.classList.add('d-none')
        contentw.classList.add('d-none')
        contentga.classList.remove('d-none')
        break
    }
  }
  render() {
    return (
      <div className="aboutContents">
        <p
          className="contentButton"
          onClick={() => this.changeContent('greeting')}
        >
          GREETING
        </p>
        <p
          className="contentButton"
          onClick={() => this.changeContent('career')}
        >
          CAREER
        </p>
        <p
          className="contentButton"
          onClick={() => this.changeContent('skills')}
        >
          SKILLS
        </p>
        <p
          className="contentButton"
          onClick={() => this.changeContent('works')}
        >
          WORKS
        </p>
        <p
          className="contentButton"
          onClick={() => this.changeContent('gallery')}
        >
          GALLERY
        </p>
        <style jsx>{`
          .aboutContents {
            width: 100px;
            padding: 40px 0 0 80px;
            margin: 0;
            text-align: center;
          }
          .contentButton {
            padding: 10px;
            margin: 10px;
            border: 1px solid black;
            border-radius: 5px;
            cursor: pointer;
            transition: 0.4s;
          }
          .contentButton :hover {
            background: black;
            color: white;
          }
        `}</style>
      </div>
    )
  }
}

export default connect(state => state)(ChangeContentButton)
