const express = require('express');
const app = express();
var fs = require("fs");
let baseUrl = '/api/v1';
app.get(baseUrl + '/listUsers', function (req, res) {
    fs.readFile(__dirname + "/" + "users.json", 'utf8', function (err, data) {
        console.log(data);
        res.end(data);
    });
})

app.get(baseUrl + '/', function (req, res) {
    res.send('Hello World');
})

let server = app.listen(8081, function () {
    let host = '10.9.42.247'
    let port = server.address().port
    console.log(`应用实例，访问地址为 http://${host}:${port}`)
})