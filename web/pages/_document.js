import Document, { Head, Main, NextScript } from 'next/document'

class MyDocument extends Document {
  // static async getInitialProps(ctx) {
  //   const initialProps = await Document.getInitialProps(ctx)
  //   return { ...initialProps }
  // }

  render() {
    return (
      <html>
        <head>
          <title key="title">SHINTARO MATSUDO</title>
          <meta name="viewport" content="width=device-width,initial-scale=1" />
          <link
            rel="shortcut icon"
            type="image/x-icon"
            href="../static/img/favicon.ico"
          />
          <link
            href="https://fonts.googleapis.com/css?family=Lato:300|Noto+Sans+JP:300"
            rel="stylesheet"
          />
          <style>{`
            body {
              font-family: Impact;
              margin:0;
            }
            .greeting p {
              font-family: Lato, Noto Sans JP, 游ゴシック Medium, 游ゴシック体,
                Yu Gothic Medium, YuGothic, ヒラギノ角ゴ ProN,
                Hiragino Kaku Gothic ProN, メイリオ, Meiryo, ＭＳＰゴシック, MSPGothic,
                sans-serif !important;
            }
            h2 {
              margin: 70px;
              text-align: center;
            }
          `}</style>
        </head>
        <body>
          <Main />
          <NextScript />
        </body>
      </html>
    )
  }
}

export default MyDocument
