/**
 * Created by Administrator on 2017/10/11 0011.
 */


var express = require('express')
var app = express()
app.set('views', './views')
app.set('view engine', 'jade')
app.get('/', function(req, res) {
    res.render('index',{title:'标题',
        con:'212356fdshgfd',message:'hello'});
});


app.listen(4000)




