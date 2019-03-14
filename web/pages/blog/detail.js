import React from 'react'
import { connect } from 'react-redux'
import { withRouter } from 'next/router'
import { detailData } from '../../actions'

const Detail = props => {
  console.log(props)
  const { id, title, content } = props.router.query
  console.log(id)
  // props.detailData({ id: id })
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

// export default Detail

export default connect(
  null,
  mapDispatchToProps
)(withRouter(Detail))
