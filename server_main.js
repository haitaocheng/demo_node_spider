// node api to start server
var http = require('http')
var url = require('url')
var util = require('util')

//第一种启动方式
function start1() {
    http.createServer(function (req, rsp) {
        rsp.writeHead(200, { 'Content-Type': 'text/javascript;charset=UTF-8' })

        var params = url.parse(req.url, true).query
        console.log('收到的内容为：' + JSON.stringify(params))
        rsp.write("网站名：" + params.userName);
        rsp.write("\n");
        rsp.write("网站 URL：" + params.password);
        rsp.end();
    }).listen(8081)
}

//第二种启动方式
function start2() {
    var http = require('http');
    var querystring = require('querystring');

    var postHTML =
        '<html><head><meta charset="utf-8"><title>菜鸟教程 Node.js 实例</title></head>' +
        '<body>' +
        '<form method="post">' +
        '网站名： <input name="name"><br>' +
        '网站 URL： <input name="url"><br>' +
        '<input type="submit">' +
        '</form>' +
        '</body></html>';

    http.createServer(function (req, res) {
        //暂存请求体信息
        var body = "";
        
        //请求链接
        console.log(req.url);

        //每当接收到请求体数据，累加到post中
        req.on('data', function (chunk) {
            body += chunk;  //一定要使用+=，如果body=chunk，因为请求favicon.ico，body会等于{}
            console.log("chunk:", chunk);
        });

        //在end事件触发后，通过querystring.parse将post解析为真正的POST请求格式，然后向客户端返回。
        req.on('end', function () {
            // 解析参数
            body = querystring.parse(body);  //将一个字符串反序列化为一个对象
            console.log("body:", body);
            // 设置响应头部信息及编码\<br><br>      
            res.writeHead(200, {'Content-Type': 'text/html; charset=utf8'});
            if (body.name && body.url) { // 输出提交的数据
                res.write("网站名：" + body.name);
                res.write("<br>");
                res.write("网站 URL：" + body.url);
            } else {  // 输出表单
                res.write(postHTML);
            }
            res.end();
        });

    }).listen(8080);
}

//start1()
start2()