const express = require('express')
const createError = require('http-errors')
const cors = require('cors')
const bodyParser = require('body-parser')
const logger = require('morgan')
const router = require('./router')

const PORT = process.env.PORT || 5000

const app = express()
app.use(logger('dev'))
app.use(
  cors({
    origin: true,
    credentials: true
  })
)

app.use('/', router)

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

// error handling
process.on('unhandledRejection', console.dir)

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404))
})

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message
  res.locals.error = req.app.get('env') === 'development' ? err : {}

  // render the error page
  res.sendStatus(err.status || 500)
})

app.listen(PORT, async () => {
  console.error(`Node API Server ${process.pid}: listening on port ${PORT}`)
})
