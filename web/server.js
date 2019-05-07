const express = require('express')
const cookieParser = require('cookie-parser')
const next = require('next')
const routes = require('./routes')

const port = parseInt(process.env.PORT, 10) || 3030
const dev = process.env.NODE_ENV !== 'production'
const app = next({ dev })
const handle = app.getRequestHandler()
const handler = routes.getRequestHandler(app)

const nodemailer = require('nodemailer')
const smtpTransport = require('nodemailer-smtp-transport')

app
  .prepare()
  .then(() => {
    const server = express()

    server.use(cookieParser())

    // server.get('*', (req, res) => {
    //   return handle(req, res)
    // })

    server.post('/contact', (req, res) => {
      const { name, email, title, message } = req.query
      console.log(req.query)
      // SMTPサーバーの設定
      const transporter = nodemailer.createTransport(
        smtpTransport({
          service: 'gmail',
          host: 'smtp.gmail.com',
          port: 587,
          tls: true,
          // webメールのログインアカウント
          auth: {
            user: 'misara2332',
            pass: 'shinmatsu24'
          }
        })
      )
      transporter.sendMail(
        {
          from: 'お問い合わせ <smisara2332@gmail.com>',
          // お問い合わせ受け取り先のメールアドレス
          to: 'misara2332@gmail.com',
          subject: title,
          text: message + '/' + name + '/' + email,
          html: message + '<br>' + name + '<br>' + email
        },
        function(err, response) {
          if (err) return next(err)
          console.log(response)
        }
      )
    })

    server.use(handler)

    server.listen(port, err => {
      if (err) throw err
      console.log(`> Ready on http://localhost:${port}`)
    })
  })
  .catch(ex => {
    console.error(ex.stack)
    process.exit(1)
  })
