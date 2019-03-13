import { connect } from 'react-redux'
import BlogList from '../components/BlogList'
import { fetchData } from '../actions'

const mapDispatchToProps = dispatch => ({
  fetchData: () => dispatch(fetchData())
})

export default connect(
  state => state,
  mapDispatchToProps
)(BlogList)
