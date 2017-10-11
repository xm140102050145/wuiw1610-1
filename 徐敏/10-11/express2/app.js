/**
 * Created by Administrator on 2017/10/11 0011.
 */

var express = require('express')
var app = express()

var home = require('./route/home');
var news = require('./route/news');
var product = require('./route/product');
app.use('/', home);
app.use('/news', news);
app.use('/product', product);

app.listen(4000);