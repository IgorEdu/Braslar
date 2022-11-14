'use strict'

//importa dependencias
const express = require('express')
const cors = require('cors')
const bodyParser = require('body-parser')
const logger = require('morgan')
const fs = require('fs')
const path = require('path')

//importa rotas
const generalRouter = require('./routes/generalRoute')
const annualProgress = require('./routes/annualProgress')
const topClients = require('./routes/topClients')
const topProducts = require('./routes/topProducts')
const topVendors = require('./routes/topVendors')
const topStates = require('./routes/topStates')

const app = express()
app.use(cors())
//app.use(logger('dev'))
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))

/*
// create a write stream (in append mode)
var accessLogStream = fs.createWriteStream(
  path.join(__dirname, '/logs/access.log'),
  { flags: 'a' }
)
// setup the logger
app.use(logger('combined', { stream: accessLogStream }))
*/

//For checking purpose whether API is respoding or not
app.get('/', (req, res) => {
  res.send('API is running')
})

//Calling Route
app.use('/api/general', generalRouter)
app.use('/api/annual-progress', annualProgress)
app.use('/api/top-clients', topClients)
app.use('/api/top-products', topProducts)
app.use('/api/top-vendors', topVendors)
app.use('/api/top-states', topStates)

// error handlers

// catch 404 and forward to error handler
app.use(function (req, res, next) {
  var err = new Error('Not Found')
  err.status = 404
  next(err)
})

// development error handler
// will print stacktrace
if (app.get('env') === 'development') {
  app.use(function (err, req, res, next) {
    res.status(err.status || 500)
    res.render('error', {
      message: err.message,
      error: err
    })
  })
}

// production error handler
// no stacktraces leaked to user
app.use(function (err, req, res, next) {
  res.status(err.status || 500)
  res.render('error', {
    message: err.message,
    //error: {}
    error: err
  })
})

const PORT = process.env.PORT || 5000

app.listen(PORT, () => console.log(`Server running on port ${PORT}`))
