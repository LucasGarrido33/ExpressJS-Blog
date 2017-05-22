let Post = require('../models/post');
let Image = require('../models/image');

// Display list of all Post
exports.post_list = function(req, res, next) {
    Post.all().then(posts => {
      res.json(posts);
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
  res.json(req.post);
};

// Handle post delete
exports.post_delete = function(req, res, next) {
  Post.delete(req.body.post_id)
  .then(result => {
    res.json(result);
  }).catch(next);
};

// Handle post update
exports.post_update = function(req, res, next) {
  req.post.title = req.post.title;

  Post.update(req.post).then(result => res.json(result)).catch(next);
};

// Handle POST create
exports.post_create = function(req, res, next) {

    req.checkBody('title', 'field is empty').notEmpty();
    req.checkBody('content', 'field is empty').notEmpty();
    req.checkBody('category', 'field is empty').notEmpty();
    req.checkBody('images', 'field is empty').notEmpty();

    req.getValidationResult().then(function(result) {
      if (!result.isEmpty()) {
        res.status(400).json(result.array());
        return;
      }
      Post.create(req.body.title, req.body.content, req.body.category)
      .then(result => Post.addImages(req.files.map(item => [result.insertId, item.filename])))
      .then(result => {
        res.json(result);
      }).catch(next);
    });
};
