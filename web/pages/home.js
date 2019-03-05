import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import Layout from '../components/Layout'
import { increment, decrement } from '../actions'

const homeStyle = {
  fontSize: 20
}

class Home extends React.Component {
  // static async getInitialProps({ store }) {
  //   const { getState, dispatch } = store
  //   const { title, content } = getState().form
  //   return { title, content }
  // }
  render() {
    const { count, onClickPlus, onClickMinus } = this.props
    console.log(this.props)
    return (
      <Layout>
        <p style={homeStyle}>こんにちは</p>
        <span>counter:{count}</span>
        <button onClick={onClickPlus}>+</button>
        <button onClick={onClickMinus}>-</button>
      </Layout>
    )
  }
}

Home.propTypes = {
  count: PropTypes.number.isRequired,
  onClickPlus: PropTypes.func.isRequired
}

// Containers
// function mapStateToProps(state) {
//   return {
//     count: state.count
//   }
// }

// function mapDispatchToProps(dispatch) {
//   return {
//     onClickPlus: () => {
//       dispatch(increment())
//     },
//     onClickMinus: () => {
//       dispatch(decrement())
//     }
//   }
// }

const mapStateToProps = state => ({
  count: state.count
})

const mapDispatchToProps = dispatch => ({
  onClickPlus: () => {
    dispatch(increment())
  },
  onClickMinus: () => {
    dispatch(decrement())
  }
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Home)
