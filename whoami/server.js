var express = require('express')
var app = express()
app.get('/', function(req,res) {
    var header = req.headers
    var ipaddress = header["x-forwarded-for"];
    var language = header["accept-language"].split(',')[0];
    var software = header["user-agent"].match(/\((.+)\)/);
    res.json({ipaddress: ipaddress, language: language, software: software[1]})
})

app.listen(8080, function() {
    console.log('Now listening on port 8080!')
})