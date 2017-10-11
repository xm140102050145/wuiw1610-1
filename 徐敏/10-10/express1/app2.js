/**
 * Created by Administrator on 2017/10/10 0010.
 */
var express = require('express')
var app = express()
//console.log(app)
app.get('/', function (req, res) {
    res.send('你好')
})
app.get('/list', function (req, res) {
    res.send('列表页')
})
var server = app.listen(3000,'localhost',function(){
    console.log("http://%s:%s",server.address().address,server.address())
})