const express = require('express');
const csrf = require('csurf');
const multer  = require('multer');
const expressValidator = require('express-validator');
const bodyParser = require('body-parser'); //http req body parser
const path = require('path');
const Post = require('../models/post');
const Category = require('../models/category');
const requireLogin = require('../middlewares/auth');
const util = require('util');


var router = express.Router();

var upload = multer({ dest: 'uploads/' });
var csrfProtection = csrf({ cookie: false });

var jsonParser = bodyParser.json()
var parseForm = bodyParser.urlencoded({ extended: false })


// router.use(requireLogin);

router.use(expressValidator()); // this line must be immediately after any of the bodyParser middlewares!

router.get('/', function (req, res, next) {
  Post.all().then(posts => {
    res.json(posts);
  })
  .catch(next);
});

router.delete('/', jsonParser, function (req, res, next) {
  console.log('here')
  console.log(req.body.post_id)
  Post.delete(req.body.post_id)
  .then(result => {
    res.json(result);
  })
  .catch(next);
});


router.get('/post',csrfProtection, function (req, res, next) {

  Category.all().then(categories => {
    res.json( {
      categories: categories,
      csrfToken: req.csrfToken()
    });
  }).catch(next);
});

router.post('/post', upload.array('images', 12), csrfProtection, function(req, res, next){

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
    .then(result => Post.addImages(req.files.map(item => [result.insertId, item.path])))
    .then(result => {
      res.json(result);
    }).catch(next);

  });

});

router.get('/categories', function(req, res, next) {
  Category.all().then(categories => {
    res.json({
      categories: categories
    });
  }).catch(next);
});

router.post('/categories', jsonParser, function(req, res, next){

  req.checkBody('title', 'Field is empty').notEmpty();

  req.getValidationResult().then(function(result) {

    if (!result.isEmpty()) {
      res.status(400).json(result.array());
      return;
    }
    Category.create(req.body.title).then(result => {
      res.json(result);
    }).catch(next);

  });
});

router.delete('/categories', jsonParser, function(req, res, next) {
  Category.delete(req.body.category_id)
  .then(result => {
    res.json(result);
  })
  .catch(next);
});


module.exports = router;
