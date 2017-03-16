var express = require('express');

var router = express.Router();


/* GET home page. */
router.get('/', function(req, res, next) {
  let Post = require('../models/post');

  Post.all().then(posts => {
    res.render('index', {
      title: 'Honey',
      posts: posts
    });
  }).catch(next);

});

router.post('/login', function(req ,res ,next){
  if(req.body.password === process.env.APP_PASS){
    req.session.loggedIn = true ;
  }
  res.redirect('/admin/');
});

router.get('/about', function(req, res, next) {
  res.render('about');
});

router.get('/resume', function(req, res, next) {
  res.render('resume');
});


module.exports = router;
