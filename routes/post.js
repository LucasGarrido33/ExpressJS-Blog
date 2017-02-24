let express = require('express');
let router = express.Router();
let fs = require('fs');


router.param('post_id', function(req, res, next, id) {

  let Post = require('../models/post');

  // try to get the post details from the Post model and attach it to the request object
  Post.find(id, function(post) {
    if (post) {
      req.post = post;
      next();
    } else {
      next(new Error('failed to load post'));
    }
  });
});


router.route('/:post_id([0-9]{1,3})')
.all(function(req, res, next) {
  // runs for all HTTP verbs first
  // think of it as route specific middleware!
  next();
})
.get(function(req, res, next) {
  res.render('post', {post: req.post});
})
.put(function(req, res, next) {
  // just an example of maybe updating the user
  req.user.name = req.params.name;
  // save user ... etc
  res.json(req.user);
})
.delete(function(req, res, next) {
  next(new Error('not implemented'));
});


module.exports = router;
