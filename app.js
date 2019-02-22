var express = require('express')
var app = express()

app.get('/', function (req, res) {
    res.send('Hello World')
})

app.get('/add/:a/:b', function (req, res) {
    res.json({
        sum: parseInt(req.params.a, 10) + parseInt(req.params.b, 10)
    })
})

module.exports = app