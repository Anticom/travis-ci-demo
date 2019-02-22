var express = require('express')
var app = express()

app.get('/', function (req, res) {
    res.send('Hello World')
})

app.get('/add/:a/:b', function (req, res) {
    const sum = parseInt(req.params.a, 10) + parseInt(req.params.b, 10);
    
    // simulating error
    if(sum == 7) {
        return res.json({ sum: 8 });
    }
    
    res.json({ sum })
})

module.exports = app