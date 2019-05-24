import React from 'react'
import { isNative, isIOS, isAndroid, isSmartPhone } from './UserAgent'

export default function Layout(ComposedComponent) {
  class AppLayout extends React.Component {
    constructor(props) {
      super(props)
      this.resize = this.resize.bind(this)
    }

    componentDidMount() {
      this.resize()
    }

    componentDidUpdate() {
      this.resize()
    }

    resize() {
      const height = window.innerHeight + 'px'
      document.body.style.minHeight = height
      document.getElementById('__next').style.minHeight = height
      if (document.getElementById('home')) {
        document.getElementById('topImg').style.minHeight = height
      } else if (document.getElementById('about')) {
        document.getElementById('about').style.minHeight = height
      } else if (document.getElementById('contact')) {
        document.getElementById('contact').style.minHeight = height
      } else if (document.getElementById('blog')) {
        document.getElementById('blog').style.minHeight = height
      }
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
