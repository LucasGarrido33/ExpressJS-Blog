const express = require('express');
const router = express.Router();
const bodyParser = require('body-parser'); //http req body parser
const jsonParser = bodyParser.json();
const category_controller = require('../controllers/categoryController');
const expressValidator = require('express-validator');
const jwt = require('express-jwt');


router.use(expressValidator());

router.param('category_id', category_controller.category_find);

router.get('/', category_controller.category_list);

router.post('/', jsonParser, jwt({secret: process.env.JWT_SECRET}), category_controller.category_create);


router.route('/:category_id([0-9]{1,3})')
.all(function(req, res, next) {
  next();
})
.get(category_controller.category_detail)
.put(jsonParser, category_controller.category_update)
.delete(category_controller.category_delete);
module.exports = router;
