import React from 'react'
import { connect } from 'react-redux'
import { fetchData } from '../actions'
import Blog from './Blog'

class BlogList extends React.Component {
  componentDidMount() {
    this.props.fetchData()
  }

  render() {
    const datas = this.props.fetchBlogData.data
    console.log(datas)
    return (
      <div>
        <ul>
          {datas.map(data => (
            <Blog key={data.id} {...data} />
          ))}
        </ul>
      </div>
    )
  }
}

const mapDispatchToProps = dispatch => ({
  fetchData: () => dispatch(fetchData())
})

export default connect(
  state => state,
  mapDispatchToProps
)(BlogList)
