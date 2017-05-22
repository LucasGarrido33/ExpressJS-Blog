const express = require('express');
const csrf = require('csurf');
const multer  = require('multer');
const expressValidator = require('express-validator');
const bodyParser = require('body-parser'); //http req body parser
const path = require('path');
// const Post = require('../models/post');
// const Category = require('../models/category');

var router = express.Router();
var storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, 'uploads/')
  },
  filename: function (req, file, cb) {
    cb(null, file.fieldname + '-' + Date.now() + path.extname(file.originalname))
  }
})
var upload = multer({ storage: storage })

// var upload = multer({ dest: 'uploads/'});
// var csrfProtection = csrf({ cookie: false });

var jsonParser = bodyParser.json()
var parseForm = bodyParser.urlencoded({ extended: false })


router.use(expressValidator()); // this line must be immediately after any of the bodyParser middlewares!

//
// router.param('post_id', function(req, res, next, id) {
//
//   Post.find(id).then(function(post) {
//     if (post) {
//       req.post = post;
//       next();
//     } else {
//       next(new Error('Failed to load post'));
//     }
//   }).catch(next);
// });
//
// router.get('/', function (req, res, next) {
//   Post.all().then(posts => {
//     res.json(posts);
//   })
//   .catch(next);
// });
//
// router.delete('/', jsonParser, function (req, res, next) {
//   Post.delete(req.body.post_id)
//   .then(result => {
//     res.json(result);
//   })
//   .catch(next);
// });
//
//
// router.get('/post', function (req, res, next) {
//
//   Category.all().then(categories => {
//     res.json( {
//       categories: categories
//     });
//   }).catch(next);
// });
//
// router.get('/post/:post_id([0-9]{1,3})', function (req, res, next) {
//   Category.all().then(categories => {
//     res.json( {
//       post: req.post,
//       categories: categories
//     });
//   }).catch(next);
// });


router.post('/post', upload.array('images', 12), function(req, res, next){

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

});

// router.get('/categories', function(req, res, next) {
//   Category.all().then(categories => {
//     res.json(categories);
//   }).catch(next);
// });

// router.post('/categories', jsonParser, function(req, res, next){
//
//   req.checkBody('name', 'Field is empty').notEmpty();
//
//   req.getValidationResult().then(function(result) {
//
//     if (!result.isEmpty()) {
//       res.status(400).json(result.array());
//       return;
//     }
//     Category.create(req.body.name).then(result => {
//       res.json(result);
//     }).catch(next);
//
//   });
// });

// router.delete('/categories', jsonParser, function(req, res, next) {
//   Category.delete(req.body.category_id)
//   .then(result => {
//     res.json(result);
//   })
//   .catch(next);
// });


module.exports = router;
