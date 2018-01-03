//使用http-proxy直接做代理，简单方便
var express = require('express');
var httpProxy = require('http-proxy');

var proxy = httpProxy.createServer({target: 'http://ccnu.chunkao.cn/index.php?s=/w17/Survey/wap/singleSurvey.html&id=17'});

app = express();

app.all('*', function (req, res, next) {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'Content-Type, Content-Length, Authorization, Accept, X-Requested-With')
    res.header('Access-Control-Allow-Methods', 'PUT, POST, GET, DELETE, OPTIONS')

    if (req.method === 'OPTIONS') {
        res.send(200);
    } else {}
    next()
});


app.get("/", function (req, res) {
    proxy.web(req, res)
});

app.listen(3000);