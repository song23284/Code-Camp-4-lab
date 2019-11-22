var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express',
      
    name:'song',
    fname:'wanathong'
    ,age:"23"

});
});

module.exports = router;
