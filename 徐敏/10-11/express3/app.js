/**
 * Created by Administrator on 2017/10/11 0011.
 */

var express = require('express')
var app = express()
var fs = require('fs')

app.use(function(req,res,next){
    var t = new Date().toLocaleTimeString();
    fs.appendFile('./log.tex',t+"\n",function(err){
        if(err) throw err;
        next();
    })
})
app.get('/', function(req, res) {
    res.send('all');
});
app.get('/list', function(req, res) {
    res.send('all all all all');
});


app.listen(4000)