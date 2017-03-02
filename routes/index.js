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
  console.log('test')
  if(req.param('password') === 'test'){
    console.log('ok')
    req.session.loggedIn = true ;
  }
  res.redirect('/admin');
});




module.exports = router;
