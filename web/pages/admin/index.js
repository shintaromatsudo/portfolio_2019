import React from 'react'
import Button from '../../components/Button'
import Blogs from '../../containers/Blogs'

class Admin extends React.Component {
  render() {
    return (
      <div>
        <Button href="admin/post" name="Post" />
        <Button href="admin/todo" name="Todo" />
        <Button href="blog/detail" name="BLOGDETAIL" />
        <Blogs />
      </div>
    )
  }
}

export default Admin
