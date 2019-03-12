import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import Layout from '../components/Layout'
import { increment, decrement, incrementAsync, resetAsync } from '../actions'

const homeStyle = {
  fontSize: 20
}

class Home extends React.Component {
  render() {
    const {
      count,
      onClickPlus,
      onClickMinus,
      onClickAsync,
      onClickReset
    } = this.props
    return (
      <Layout>
        <p style={homeStyle}>こんにちは</p>
        <span>counter:{count}</span>
        <button onClick={onClickPlus}>+</button>
        <button onClick={onClickMinus}>-</button>
        <button onClick={onClickAsync}>Async</button>
        <button onClick={onClickReset}>Reset</button>
      </Layout>
    )
  }
}

Home.propTypes = {
  count: PropTypes.number.isRequired,
  onClickAsync: PropTypes.func.isRequired
}

const mapStateToProps = state => ({
  count: state.count
})

const mapDispatchToProps = dispatch => ({
  onClickPlus: () => {
    dispatch(increment())
  },
  onClickMinus: () => {
    dispatch(decrement())
  },
  onClickAsync: () => {
    dispatch(incrementAsync())
  },
  onClickReset: () => {
    dispatch(resetAsync())
  }
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Home)
