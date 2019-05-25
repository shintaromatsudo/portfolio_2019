import React from 'react'
import { connect } from 'react-redux'
import { withRouter } from 'next/router'
import { detailData } from '../../actions'

const Detail = props => {
  const { title, content } = props.router.query
  return (
    <div>
      <h2>{title}</h2>
      <p>{content}</p>
    </div>
  )
}

const mapDispatchToProps = dispatch => ({
  detailData: () => dispatch(detailData())
})

export default connect(
  null,
  mapDispatchToProps
)(withRouter(Detail))
