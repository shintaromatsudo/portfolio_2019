import React from 'react'
import Header from './Header'
import Footer from './Footer'

const headerStyle = {
  margin: 20,
  padding: 20,
  border: '1px solid #DDD'
}

const footerStyle = {
  margin: 20,
  padding: 20,
  border: '1px solid #DDD'
}

const Layout = props => (
  <React.Fragment>
    <div style={headerStyle}>
      <Header />
    </div>
    {props.children}
    <div style={footerStyle}>
      <Footer />
    </div>
  </React.Fragment>
)

export default Layout
