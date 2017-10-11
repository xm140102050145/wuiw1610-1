/**
 * Created by Administrator on 2017/10/11 0011.
 */
var express = require('express');
var router = express.Router();
router.route('/')
    .get(function(res,req){
        console.log("get news")
    })
    .post(function(res,req){
        console.log("post news")
    })
router.get('/list', function(req, res) {
    console.log("get news-list")
});

router.post('/list', function(req, res) {
    console.log("post news-list")
});

module.exports = router;