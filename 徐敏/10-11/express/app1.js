/**
 * Created by Administrator on 2017/10/11 0011.
 */

var express = require('express')
var app = express()

//路由句柄
//多个回调函数（上一个需要在回调函数的参数里写next ,然后调用next()  就可以执行下一个函数）


//一：多个函数
    //app.get('/', function (req, res, next) {
    //    console.log('1');
    //    next();
    //}, function (req, res) {
    //    console.log('2');
    //    res.send('到最后了');
    //});

//二：函数数组型
//    var h1 = function (req, res, next) {
//        console.log('1');
//        next();
//    }
//
//    var h2 = function (req, res, next) {
//        console.log('2');
//        next();
//    }
//
//    var h3 = function (req, res) {
//        console.log('3');
//        res.send('又到最后了');
//    }
//
//    app.get('/example/c', [h1, h2, h3]);


//三：混合型
var hh1 = function (req, res, next) {
    console.log('hh1');
    next();
}

var hh2 = function (req, res, next) {
    console.log('hh2');
    next();
}

app.get('/', [hh1, hh2], function (req, res, next) {
    console.log('hh3');
    next();
}, function (req, res) {
    console.log('hh4');
    res.send('最最后了');
});


var server = app.listen(4000)