import React from 'react'
import { connect } from 'react-redux'

const Detail = props => {
  console.log(props)
  return (
    <div>
      <p>aaa</p>
    </div>
  )
}

const mapDispatchToProps = dispatch => ({
  detailData: () => dispatch(detailData())
})

export default connect(
  null,
  mapDispatchToProps
)(Detail)
