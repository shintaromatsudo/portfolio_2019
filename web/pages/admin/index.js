import React from 'react'
import { connect } from 'react-redux'
import Button from '../../components/Button'
import BlogList from '../../components/BlogList'

class Admin extends React.Component {
  static async getInitialProps({ store }) {
    const { getState, dispatch } = store
    const { title, content } = getState().form
    return { title, content }
  }

  render() {
    console.log('admin', this.props)
    return (
      <div>
        <Button href="admin/post" name="Post" />
        <BlogList title={this.props.title} />
      </div>
    )
  }
}

export default connect(state => state)(Admin)
