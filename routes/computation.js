
var express = require('express');
var router = express.Router();
let value=Math.floor(Math.random());
let y
/* GET home page. */
router.get('/', function(req, res, next) {
    if(req.query.value!=undefined){
        value=req.query.value;

    }
    let p=Math.atan2(value,value);
    let q=Math.atanh(value);
    let r=Math.cbrt(value);
    
  res.render('computation', { value:value,atan2:p, atanh:q, cbrt:r});
});

module.exports = router;
