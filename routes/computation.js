
var express = require('express');
var router = express.Router();
let x=Math.floor(Math.random());
let y
/* GET home page. */
router.get('/', function(req, res, next) {
    if(req.query.x!=undefined){
        x=req.query.x;

    }
    let r=Math.atan2(x);
    let t=Math.atanh(x);
    let n=Math.cbrt(x);
    
  res.render('computation', { x:x,atan2:r, atanh:t, cbrt:n});
});

module.exports = router;
