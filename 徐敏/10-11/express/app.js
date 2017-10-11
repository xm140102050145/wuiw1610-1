/**
 * Created by Administrator on 2017/10/11 0011.
 */

var express = require('express')
var app = express()

//路由匹配所有
//app.all('/secret', function (req, res, next) {
//    console.log('全部都可以.');
//    next();
//});


//字符串模式
app.get('/qa?w', function(req, res) {
    res.send('q和w 中间a可写可不写。都能访问');
});

app.get('/az+ac', function(req, res) {
    res.send('z至少重复一次，可多次');
});

app.get('/www*eee', function(req, res) {
    res.send('www和eee中间可以写任意字符，数字');
});
var server = app.listen(4000)