var express = require('express')
var app = express()

var myLogger = function (req, res, next) {
  console.log('LOGGED')
  next()
}

app.use(myLogger)

app.get('/img/', function (req, res) {
  res.send('Guru Weds Keerthi')
})

app.get('/vendor/', function (req, res) {
  res.send('Guru Weds Keerthi')
})

app.get('/js/', function (req, res) {
  res.send('Guru Weds Keerthi')
})

app.get('/css/', function (req, res) {
  res.send('Guru Weds Keerthi')
})
