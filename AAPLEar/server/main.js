const express = require('express');
const app = express();

module.exports = (function () {
    let server = app.listen(8081, function () {
        let host = '10.9.42.247';
        let port = server.address().port;
        console.log(`应用实例，访问地址为 http://${host}:${port}`)
    })
})();
