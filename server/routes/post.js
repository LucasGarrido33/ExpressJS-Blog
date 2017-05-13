var express = require('express');
var router = express.Router();
let fs = require('fs');
let Post = require('../models/post');
let Image = require('../models/image');


router.param('post_id', function(req, res, next, id) {
  // try to get the post details from the Post model and attach it to the request object
  Post.find(id).then(function(post) {
    if (post) {
      req.post = post;
      return Image.findByPost(id);
    } else {
      next(new Error('Failed to load post'));
    }
  }).then((images) => {
    if(images){
      req.post.addImages(images);
      next();
    } else {
      next(new Error('Failed to load images'));
    }
  }).catch(next);
});


router.route('/:post_id([0-9]{1,3})')
.all(function(req, res, next) {
  // runs for all HTTP verbs first
  // think of it as route specific middleware!
  next();
})
.get(function(req, res, next) {
  res.json(req.post);
})
.put(function(req, res, next) {
  req.post.title = req.post.title;

  Post.update(req.post).then(result => res.json(result)).catch(next);
})
.delete(function(req, res, next) {
  next(new Error('not implemented'));
});


module.exports = router;
