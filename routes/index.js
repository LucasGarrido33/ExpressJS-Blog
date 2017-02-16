let express = require('express');
let router = express.Router();


/* GET home page. */
router.get('/', function(req, res, next) {
  let Post = require('../models/post');
  Post.all(function(posts) {
    res.render('index', {
      title: 'Honey',
      posts: posts
    });
  });
});



module.exports = router;
