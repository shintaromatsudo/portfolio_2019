import Document, { Head, Main, NextScript } from 'next/document'

class MyDocument extends Document {
  // static async getInitialProps(ctx) {
  //   const initialProps = await Document.getInitialProps(ctx)
  //   return { ...initialProps }
  // }

  render() {
    return (
      <html>
        <Head>
          <title key="title">SHINTARO MATSUDO</title>
          <meta name="viewport" content="width=device-width,initial-scale=1" />
          <link
            rel="shortcut icon"
            type="image/x-icon"
            href="../static/img/favicon.ico"
          />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
        <style jsx>{`
          body {
            background-color: blue;
          }
        `}</style>
      </html>
    )
  }
}

export default MyDocument
