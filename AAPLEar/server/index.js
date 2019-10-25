const express = require('express');
const GoodsList = require('./goodsList');

const app = express();
let baseUrl = '/api/v1';

app.get(baseUrl + '/goodsList', function (req, res) {
    let data
    try {
        let f = req.query.f
        let s = req.query.s
        let page = Number(req.query.page)
        let goodsList = new GoodsList(f, s, page)
        data = goodsList.getData()
    } catch (e) {
        data = {
            "head": {
                "status": "403",
                "data": e
            },
            "body":{}
        }
    }
    
    res.header("Content-Type", "application/json; charset=utf-8")
    res.end(JSON.stringify(data))
})

let server = app.listen(8081, function () {
    let host = '10.9.42.247'
    let port = server.address().port
    console.log(`应用实例，访问地址为 http://${host}:${port}`)
})