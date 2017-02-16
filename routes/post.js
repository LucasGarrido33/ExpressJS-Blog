let express = require('express');
let router = express.Router();


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
.post(function(req, res, next) {
  next(new Error('not implemented'));
})
.delete(function(req, res, next) {
  next(new Error('not implemented'));
});


router.get('/add', function(req, res, next) {
    res.render('add');
});

//
// router.post('/add', function(req, res, next){
//
//   let Post = require('../models/post');
//   console.log(req.fields); // contains non-file fields
//   res.redirect('/');
// });

module.exports = router;
