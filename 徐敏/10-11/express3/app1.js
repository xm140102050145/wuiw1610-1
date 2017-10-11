/**
 * Created by Administrator on 2017/10/11 0011.
 */

var express = require('express')
var app = express()
var fs = require('fs')

app.use('/list',function(req,res,next){
    var t = new Date().toLocaleTimeString();
    fs.appendFile('./log1.tex',t+"\n",function(err){
        if(err) throw err;
        next();
    })
})
app.get('/', function(req, res) {
    res.send('ss');
});
app.get('/list', function(req, res) {
    res.send('only list can do it');
});

app.listen(4000)