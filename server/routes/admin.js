var express = require('express');
var router = express.Router();

var csrf = require('csurf');
var csrfProtection = csrf();

var multer  = require('multer');
var upload = multer({ dest: 'uploads/' });
var expressValidator = require('express-validator');

var path = require('path');

const Post = require('../models/post');
const Category = require('../models/category');
const requireLogin = require('../middlewares/auth');

router.use(requireLogin);
router.use(expressValidator()); // this line must be immediately after any of the bodyParser middlewares!

router.get('/', function (req, res, next) {
  Post.all().then(posts => {
    res.render('admin/index', {
      posts: posts
    });
  })
  .catch(next);
});


router.delete('/', function (req, res, next) {
  Post.delete(req.body.post_id)
  .then(result => {
    res.redirect('/admin');
  })
  .catch(next);
});


router.get('/post', csrfProtection, function (req, res, next) {

  Category.all().then(categories => {
    res.render('admin/post', {
      categories: categories,
      csrfToken: req.csrfToken(),
    });
  })
  .catch(next);
});

router.post('/post', upload.array('images', 12), csrfProtection, function(req, res, next){
  req.checkBody('title', 'Field is empty').notEmpty();
  req.checkBody('content', 'field is empty').notEmpty();

  req.checkBody('category', 'field is empty').notEmpty();

    req.getValidationResult().then(function(result) {
      if (!result.isEmpty()) {
        req.flash('info', result.array());
        res.redirect('back');
      }

      let imagesNameList = [];

      req.files.forEach(function(item, index, array) {
        imagesNameList.push(item.path);
      });

      Post.create(req.body.title, req.body.content, req.body.category)
      .then(result => {
        Post.addImages(imagesNameList, result.insertId)
      })
      .then(result => {
        res.redirect('/');
      })
      .catch(next);
    });

});

router.get('/category', csrfProtection, function(req, res, next) {
  Category.all().then(categories => {
    res.render('admin/category', {
      categories: categories,
      csrfToken: req.csrfToken()
    });
  }).catch(next);
});

router.post('/category', csrfProtection, function(req, res, next){

  req.checkBody('title', 'Field is empty').notEmpty();

  req.getValidationResult().then(function(result) {
    if (!result.isEmpty()) {
      req.flash('info', result.array());
      res.redirect('back');
    }
    Category.create(req.body.title).then(result => {
      res.redirect('/admin/category');
    }).catch(next);
  });
});

router.delete('/category', function(req, res, next) {
  Category.delete(req.body.category_id)
  .then(result => {
    res.redirect('/admin/category');
  })
  .catch(next);
});


module.exports = router;
