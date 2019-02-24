import React from 'react'
import Layout from '../components/Layout'

const homeStyle = {
  fontSize: 20
}

export default class Index extends React.Component {
  render() {
    return (
      <Layout>
        <p style={homeStyle}>こんにちは</p>
      </Layout>
    )
  }
}
