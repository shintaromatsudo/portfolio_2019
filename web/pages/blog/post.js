import React from 'react'
import { connect } from 'react-redux'

const Detail = ({ title, content }) => (
  <div>
    <h3>{title}</h3>
    <p>{content}</p>
  </div>
)

export default Detail