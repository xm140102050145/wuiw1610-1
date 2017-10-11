/**
 * Created by Administrator on 2017/10/10 0010.
 */
var express = require('express')
var app = express()
//console.log(app)
app.use(express.static('static'));
var server = app.listen(3000,'localhost',function(){
    console.log("http://%s:%s",server.address().address,server.address())
})