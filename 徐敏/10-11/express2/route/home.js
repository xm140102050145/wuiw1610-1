/**
 * Created by Administrator on 2017/10/11 0011.
 */
var express = require('express');
var router = express.Router();
router.route('/')
    .get(function(res,req){
        console.log("get home")
    })
    .post(function(res,req){
        console.log("post home")
    })

module.exports = router;