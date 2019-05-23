import React from 'react'
import { isNative, isIOS, isAndroid, isSmartPhone } from './UserAgent'

export default function Layout(ComposedComponent) {
  class AppLayout extends React.Component {
    constructor(props) {
      super(props)
      this.resize = this.resize.bind(this)
    }

    componentDidMount() {
      if (isNative() || isIOS() || isAndroid() || isSmartPhone()) {
        this.resize()
      }
    }

    resize() {
      document.body.style.height = window.innerHeight + 'px'
      console.log(document.body.style.height)
    }

    render() {
      return (
        <React.Fragment>
          <ComposedComponent {...this.props} />
        </React.Fragment>
      )
    }
  }

  return AppLayout
}
