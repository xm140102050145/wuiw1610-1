/**
 * Created by Administrator on 2017/10/11 0011.
 */


var express = require('express')
var app = express()
app.set('views', './views')
app.set('view engine', 'html')
app.engine("html",require('ejs').renderFile)
app.get('/', function(req, res) {
    res.render('index',{title:'ejs内容',
        con:'<b> ejs 的内容，和HTML 很像</b> ',message:'hello',keyword:'123'});
});

app.listen(4000)




