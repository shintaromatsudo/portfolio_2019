import { connect } from 'react-redux'

const AboutTitle = props => (
  <div className="aboutTitle">
    <h2>{props.title}</h2>

    <style jsx>{`
      .aboutTitle {
        padding: 50px;
      }
    `}</style>
  </div>
)

export default connect(state => ({ title: state.aboutTitle.aboutTitle }))(
  AboutTitle
)
