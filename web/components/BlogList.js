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
    const reverseDatas = datas.reverse()
    return (
      <div className="blog-list">
        {reverseDatas.map(data => (
          <Blog key={data.id} {...data} />
        ))}
        <style jsx>{`
          .blog-list {
            display: grid;
            gap: 50px;
            grid-template-columns: repeat(auto-fill, 300px);
            justify-content: center;
          }
        `}</style>
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
