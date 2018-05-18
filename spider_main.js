
// this is the test of get imooc title 
var http = require('https')
var querystring = require('querystring');

//http get 方法测试
function getTest(http) {
    console.log('before http.get')
    //获取慕课网首页html源代码
    http.get('https://www.jianshu.com/p/c32365dce904', function (res) {
        var html = '';
        res.on('data', function (data) {
            html += data;
        })
        res.on('end', function () {
            // var json = JSON.parse(html)
            console.log(html)
        })
    })


    console.log('after http.get')
}

//http post 方法测试
function postTest(http) {
    
    //json转换为字符串
    var data = querystring.stringify({
        id: "1",
        pw: "hello"
    });
    var options = {
        host: '115.29.45.194',
        //    host:'localhost',
        //    port: 14000,
        //    path: '/v1?command=getAuthenticode',
        path: '/callme/index.cfm/userService/command/getAuthenticode/',
        method: 'POST',
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded',
            'Content-Length': Buffer.byteLength(data)
        }
    };

    var req = http.request(options, function (res) {
        res.setEncoding('utf8');
        res.on('data', function (chunk) {
            console.log("body: " + chunk);
        });
        res.on('end', function (chunk) {
            console.log("body: " + chunk);
        })
    });
    req.write(data);
    req.end();

}
//ddd
getTest(http)