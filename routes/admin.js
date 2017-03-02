var express = require('express');
var router = express.Router();

var csrf = require('csurf');
var csrfProtection = csrf();

var multer  = require('multer');
var upload = multer({ dest: 'uploads/' });

var path = require('path');

let Post = require('../models/post');
let Category = require('../models/category');
var requireLogin = require('../middlewares/auth');

router.use(requireLogin);

router.get('/', function(req, res, next) {
  console.log('coucou')
  Post.all().then(posts => {
    res.render('admin/index', {
      posts: posts
    });
  })
  .catch(next);
});


router.delete('/', function(req, res, next) {
  Post.delete(req.param('post_id'))
  .then(result => {
    res.redirect('/admin');
  })
  .catch(next);
});



router.get('/post', csrfProtection, function(req, res, next) {

  categories = Category.all()
  .then(categories => {
    res.render('admin/post', {
      categories: categories,
      csrfToken: req.csrfToken()
    });
  })
  .catch(next);
});

router.post('/post', upload.array('images', 12), csrfProtection, function(req, res, next){

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

router.get('/category', csrfProtection, function(req, res, next) {
  Category.all().then(categories => {
    res.render('admin/category', {
      categories: categories,
      csrfToken: req.csrfToken()
    });
  }).catch(next);
});

router.post('/category', csrfProtection, function(req, res, next){
  Category.create(req.param('title')).then(result => {
    res.redirect('/admin/category');
  }).catch(next);
});

router.delete('/category', function(req, res, next) {
  Category.delete(req.param('category_id'))
  .then(result => {
    res.redirect('/admin/category');
  })
  .catch(next);
});


module.exports = router;
