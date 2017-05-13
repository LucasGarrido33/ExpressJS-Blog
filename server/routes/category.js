var express = require('express');
var router = express.Router();
let Category = require('../models/category');
const bodyParser = require('body-parser'); //http req body parser
var jsonParser = bodyParser.json();


router.param('category_id', function(req, res, next, id) {
  Category.find(id).then(function(category) {
    if (category) {
      req.category = category;
      next();
    } else {
      next(new Error('Failed to load category'));
    }
  }).catch(next);
});


router.route('/:category_id([0-9]{1,3})')
.all(function(req, res, next) {
  next();
})
.get(function(req, res, next) {
  res.json(req.category);
})
.put(jsonParser, function(req, res, next) {

  req.category.name = req.body.name;

  Category.update(req.category).then(result => res.json(result)).catch(next);

})
.delete(function(req, res, next) {
  Category.delete(req.category.id)
  .then(result => {
    res.json(result);
  })
  .catch(next);
});


module.exports = router;
