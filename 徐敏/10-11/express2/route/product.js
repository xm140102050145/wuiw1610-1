/**
 * Created by Administrator on 2017/10/11 0011.
 */
var express = require('express');
var router = express.Router();
var app = express()

router.route('/')
    .get(function(res,req){
        console.log("get product")
    })
    .post(function(res,req){
        console.log("post product")
    })
router.get('/list', function(req, res) {
    console.log("get product-list")
});

router.post('/list', function(req, res) {
    console.log("post product-list")
});

module.exports = router;