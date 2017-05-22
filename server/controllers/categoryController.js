let Category = require('../models/category');

// Display list of all categories
exports.category_list = function(req, res, next) {
  Category.all().then(categories => {
    res.json(categories);
  }).catch(next);
};

// Display detail page for a specific category
exports.category_find = function(req, res, next, id) {
  Category.find(id).then(function(category) {
    if (category) {
      req.category = category;
      next();
    } else {
      next(new Error('Failed to load category'));
    }
  }).catch(next);
};

// Display detail page for a specific category
exports.category_detail = function(req, res, next) {
  res.json(req.category);
};

// Handle category delete
exports.category_delete = function(req, res, next) {
  Category.delete(req.category.id)
  .then(result => {
    res.json(result);
  })
  .catch(next);
};

// Handle category update
exports.category_update = function(req, res, next) {
  req.category.name = req.body.name;
  Category.update(req.category).then(result => res.json(result)).catch(next);
};

// Handle category create
exports.category_create = function(req, res, next) {
  req.checkBody('name', 'Field is empty').notEmpty();
  req.getValidationResult().then(function(result) {
    if (!result.isEmpty()) {
      res.status(400).json(result.array());
      return;
    }
    Category.create(req.body.name).then(result => {
      res.json(result);
    }).catch(next);
  });
};
