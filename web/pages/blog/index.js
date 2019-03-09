import React from 'react'
import { connect } from 'react-redux'
// import BlogList from '../../components/BlogList'
import Blogs from '../../containers/Blogs'

class Blog extends React.Component {
  render() {
    return (
      <div className="Blog">
        <h2>BLOG</h2>
        {/* <BlogList /> */}
        <Blogs />
      </div>
    )
  }
}

// const mapStateToProps = state => ({
//   state: state
// })

// const mapDispatchToProps = dispatch => ({
//   fetchData: () => dispatch(fetchData())
// })
export default Blog
// export default connect(
//   mapStateToProps,
//   mapDispatchToProps
// )(BlogList)
