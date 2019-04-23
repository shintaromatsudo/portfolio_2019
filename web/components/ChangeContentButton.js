import React from 'react'

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
    const contents = document.getElementById('ContentSkills')
    const contentw = document.getElementById('ContentWorks')
    const contentga = document.getElementById('ContentGallery')
    switch (content) {
      case 'greeting':
        console.log('click')
        contentgr.classList.remove('d-none')
        contents.classList.add('d-none')
        contentw.classList.add('d-none')
        contentga.classList.add('d-none')
        break
      case 'skills':
        contentgr.classList.add('d-none')
        contents.classList.remove('d-none')
        contentw.classList.add('d-none')
        contentga.classList.add('d-none')
        break
      case 'works':
        contentgr.classList.add('d-none')
        contents.classList.add('d-none')
        contentw.classList.remove('d-none')
        contentga.classList.add('d-none')
        break
      case 'gallery':
        contentgr.classList.add('d-none')
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
            width: 400px;
            margin: auto;
            display: flex;
          }
          .contentButton {
            padding: 10px;
            margin: 10px;
            border: 1px solid black;
            cursor: pointer;
          }
        `}</style>
      </div>
    )
  }
}

export default ChangeContentButton
