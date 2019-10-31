let express = require('express');
let bodyParser = require('body-parser'); // json解析中间件

let GoodsList = require('./goodsList');
let Detail = require('./detail');

let app = express();
let baseUrl = '/api/v1';

// 添加json解析
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

app.all("/*", function (req, res, next) {
    // 跨域处理
    res.header("Access-Control-Allow-Origin", "http://localhost:8080");
    res.header("Access-Control-Allow-Headers", "X-Requested-With");
    res.header("Access-Control-Allow-Methods", "PUT,POST,GET,DELETE,OPTIONS");
    res.header("Content-Type", "application/json;charset=utf-8");
    res.header("Access-Control-Allow-Credentials", 'true');
    next(); // 执行下一个路由
});

app.get(baseUrl + '/goodsList', function (req, res) {
    let data;
    try {
        let f = req.query.f;
        let s = req.query.s;
        let _page = Number(req.query.page);
        let page = _page ? _page : 1;
        let goodsList = new GoodsList(f, s, page);
        data = goodsList.getData()
    } catch (e) {
        data = {
            "head": {
                "status": "403",
                "data": e
            },
            "body": {}
        }
    }
    res.end(JSON.stringify(data))
});

app.get(baseUrl + '/detail', function (req, res) {
    let data;
    try {
        console.log(req.query);
        let detail = new Detail(req.query.id);
        data = detail.getData();
    } catch (e) {
        data = {
            "head": {
                "status": "403",
                "data": e
            },
            "body": {}
        }
    }
    res.end(JSON.stringify(data))
});

app.post(baseUrl + '/cart', function (req, res) {
    let query = req.body;
    console.log(query);
    console.log(query.type)
});

let server = app.listen(4000, function () {
    let host = '10.9.42.247';
    let port = server.address().port;
    console.log(`应用实例，访问地址为 http://${host}:${port}`)
});