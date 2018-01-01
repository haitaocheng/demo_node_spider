var http = require('http')
var querystring = require('querystring')

var queryParam = {
    name: 'admin',
    url: 'adminPassWord'
}

var method = 'POST';
options = {
    hostname: '127.0.0.1',
    port: 8080,
    method: method,
    path: '/'
}

var url = 'http://localhost:8080/?userName=admin&password=adminPassWord';

function getTest() {
    var handel = http.request(options, function (req) {
        console.log('STATUS: ' + req.statusCode);
        console.log('HEADERS: ' + JSON.stringify(req.headers));
        req.setEncoding('utf8');

        var rspData = '';
        req.on('data', function (data) {
            rspData += data;
        })

        req.on('end',function(){
            console.log(rspData)
        })

    })
    handel.on('error', function (e) {
        console.log('problem with request: ' + e.message);
    })

    handel.end();
}

function getTest2() {
    var http = require('http');

    var qs = require('querystring');

    var data = {
        name: 'admin',
        url: 'adminPassWord'
    };//这是需要提交的数据 


    var content = qs.stringify(data);

    var options = {
        hostname: '127.0.0.1',
        port: 8080,
        path: '/?' + content,
        method: 'GET'
    };

    var req = http.request(options, function (res) {
        console.log('STATUS: ' + res.statusCode);
        console.log('HEADERS: ' + JSON.stringify(res.headers));
        res.setEncoding('utf8');
        res.on('data', function (chunk) {
            console.log('BODY: ' + chunk);
        });
    });

    req.on('error', function (e) {
        console.log('problem with request: ' + e.message);
    });

    req.end();
}

function postTest() {
    var handle = http.request(options,function(res){

        var rspData = '';
        res.on('data', function (data) {
            rspData += data;
        })

        res.on('end',function(){
            console.log(rspData)
        })
    })

    handle.write(querystring.stringify(queryParam));
    handle.end();
}

postTest()
//getTest()