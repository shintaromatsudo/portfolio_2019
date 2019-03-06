import React from 'react'
import { connect } from 'react-redux'
import Button from '../../components/Button'
import BlogList from '../../components/BlogList'

class Admin extends React.Component {
  render() {
    console.log('admin', this.props)
    return (
      <div>
        <Button href="admin/post" name="Post" />
        <BlogList />
      </div>
    )
  }
}

export default connect(state => state)(BlogList)
