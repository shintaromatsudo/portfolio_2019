import React from 'react'
import App, { Container } from 'next/app'
// REDUX
import { Provider } from 'react-redux'
import withRedux from 'next-redux-wrapper'
// import withReduxSaga from 'next-redux-saga'
import { initStore } from '../store'

export default withRedux(initStore)(
  class MyApp extends App {
    static async getInitialProps({ Component, ctx }) {
      return {
        pageProps: Component.getInitialProps
          ? await Component.getInitialProps(ctx)
          : {}
      }
    }

    render() {
      const { Component, pageProps, store } = this.props
      console.log(this.props)
      return (
        <Container>
          <Provider store={store}>
            <Component {...pageProps} />
          </Provider>
        </Container>
      )
    }
  }
)

// export default withRedux(createStore)(withReduxSaga({ async: false })(MyApp))
// export default withRedux(initStore)(MyApp)
