var express = require('express');

var router = express.Router();


/* GET home page. */
router.get('/', function(req, res, next) {
  let Post = require('../models/post');

  Post.all().then(posts => {
    res.json(posts);
  }).catch(next);

});

router.post('/login', function(req ,res ,next){
  if(req.body.password === process.env.APP_PASS){
    req.session.loggedIn = true ;
  }

});

module.exports = router;
