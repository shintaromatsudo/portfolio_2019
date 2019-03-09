import { connect } from 'react-redux'
import BlogList from '../components/BlogList'
import { fetchData } from '../actions'

const mapStateToProps = state => ({
  state: state
})

const mapDispatchToProps = dispatch => ({
  fetchData: () => dispatch(fetchData())
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(BlogList)
