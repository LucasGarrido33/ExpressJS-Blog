let express = require('express');
let router = express.Router();
let formidable = require('formidable');
let path = require('path');


router.get('/', function(req, res) {
  let Post = require('../models/post');
  Post.all(function(posts) {
    res.render('admin/index', {
      posts: posts
    });
  });
});


router.delete('/', function(req, res, next) {
  let Post = require('../models/post');
  Post.delete(req.param('post_id'), function(result){
    res.redirect('/admin');
  });
});


  router.get('/post', function(req, res) {
    let Category = require('../models/category');
    categories = Category.all(function(categories){
      res.render('admin/post', {
        categories: categories
      });
    });
  });

  router.post('/post', function(req, res, next){
    let Post = require('../models/post');
    let form = new formidable.IncomingForm();
    let postArgumentList = [];
    let imagesNameList = [];

    form.keepExtensions = true;
    form.multiples = true;
    form.uploadDir = path.join(__dirname, '../uploads');

    form.on('field', function(name, value) {
      postArgumentList.push(value);
    });

  form.on('file', function(field, file) {
    // fs.rename(file.path, path.join(form.uploadDir, file.name));
    imagesNameList.push(file.name);
  });

  // log any errors that occur
  form.on('error', function(err) {
    console.log('An error has occured: \n' + err);
  });

  // once all the files have been uploaded, send a response to the client
  form.on('end', function() {
    Post.create(...postArgumentList, function(result){
      Post.addImages(imagesNameList, result.insertId, function(result){
        res.redirect('/');
      });
    });
  });

  // parse the incoming request containing the form data
  form.parse(req);

  });


module.exports = router;
