
var express = require('express');
var router = express.Router();
let x=Math.floor(Math.random());
let y
/* GET home page. */
router.get('/', function(req, res, next) {
    if(req.query.x!=undefined){
        x=req.query.x;

    }
    let p=Math.atan2(x);
    let q=Math.atanh(x);
    let r=Math.cbrt(x);
    
  res.render('computation', { x:x,atan2:p, atanh:q, cbrt:r});
});

module.exports = router;
