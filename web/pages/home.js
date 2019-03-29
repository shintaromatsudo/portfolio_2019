import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import PageLinks from '../components/PageLinks'
import { increment, decrement, incrementAsync, resetAsync } from '../actions'
import FadeOutColor from '../components/FadeOutColor'

const homeStyle = {
  fontSize: 20
}

const style = {
  backgroundColor: '#00a968'
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
      <React.Fragment>
        <FadeOutColor style={style} />
        <PageLinks />
        <p style={homeStyle}>こんにちは</p>
        <span>counter:{count}</span>
        <button onClick={onClickPlus}>+</button>
        <button onClick={onClickMinus}>-</button>
        <button onClick={onClickAsync}>Async</button>
        <button onClick={onClickReset}>Reset</button>
      </React.Fragment>
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
