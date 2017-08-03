const Post = require('../models/post');
const Image = require('../models/image');
const fs = require('fs-extra');
const path = require('path');

// Display list of all Post
exports.post_list = function(req, res, next) {
    Post.all().then(posts => {
      res.status(200).json(posts);
    }).catch(next);
};

exports.posts_sort = function(req, res, next){
  Post.sort(req.body.posts).then(function(posts) {
    res.status(200).json({success:true});
  }).catch(next);

};

// Display detail page for a specific Post
exports.post_find = function(req, res, next, id) {
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
};

// Display detail page for a specific Post
exports.post_detail = function(req, res, next) {
  res.status(200).json(req.post);
};

// Handle post delete
exports.post_delete = function(req, res, next) {
  Promise.all(
    [
      fs.remove(path.join('./uploads/' + req.post.thumbnail)),
      Post.delete(req.post.id)
    ])
    .then(result => {
      res.status(200).json(result[1]);
    }).catch(next)
};

// Handle post update
exports.post_update = function(req, res, next) {
  req.post.title = req.body.title;
  req.post.content = req.body.content;
  req.post.category = req.body.category;

  Post.update(req.post).then(result => res.status(200).json(result)).catch(next);
};

// Handle POST create
exports.post_create = function(req, res, next) {
    req.checkBody('title', 'field is empty').notEmpty();
    req.checkBody('content', 'field is empty').notEmpty();
    req.checkBody('category', 'field is empty').notEmpty();

    req.getValidationResult().then(function(result) {
      if (!result.isEmpty()) {
        res.status(400).json(result.array());
        return;
      }

      return Post.create(req.body.title, req.body.content, req.file.filename, req.body.category);

    })
    // .then(result => Post.addImages(req.files.map(item => [result.insertId, item.filename])))
    .then(result => res.status(201).json(result) )
    .catch(next);

};
