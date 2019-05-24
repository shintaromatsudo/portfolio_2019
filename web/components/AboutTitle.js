import { connect } from 'react-redux'

const AboutTitle = props => (
  <div className="aboutTitle">
    <h2>{props.title}</h2>

    <style jsx>{`
      @media screen and (max-width: 500px) {
        .aboutTitle {
          padding: 20px;
        }
      }
      @media screen and (min-width: 501px) {
        .aboutTitle {
          padding: 50px;
        }
      }
    `}</style>
  </div>
)

export default connect(state => ({ title: state.aboutTitle.aboutTitle }))(
  AboutTitle
)
