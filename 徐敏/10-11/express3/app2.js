/**
 * Created by Administrator on 2017/10/11 0011.
 */

var express = require('express')
var app = express()

app.use(function (req, res, next) {
    //国家
    req.money = 10000;
    console.log('国家');
    next();
});
app.use(function (req, res, next) {
    //省
    req.money = req.money-3000;
    console.log('省');
    next();
});
app.use(function (req, res, next) {
    //市
    req.money = req.money-2000;
    console.log('市');
    next();
});
app.use(function (req, res, next) {
    //县
    req.money = req.money-1000;
    console.log('县');
    next();
});
app.use(function (req, res, next) {
    //镇
    req.money = req.money-1000;
    console.log('镇');
    next();
});
app.use(function (req, res, next) {
    //村
    req.money = req.money-500;
    console.log('村');
    next();
});

app.use('/', function (req, res) {
    res.send(req.money+'元，这是黑暗大地的剩余');
});


var server = app.listen(4000)