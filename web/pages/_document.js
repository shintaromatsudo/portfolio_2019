import Document, { Head, Main, NextScript } from 'next/document'

class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx)
    return { ...initialProps }
  }

  render() {
    return (
      <html>
        <Head>
          <style>{``}</style>
        </Head>
        <body className="">
          <Main />
          <NextScript />
        </body>
      </html>
    )
  }
}

export default MyDocument
