const express = require('express');
const router = express.Router();

const post_controller = require('../controllers/postController');

const multer  = require('multer');
const bodyParser = require('body-parser'); //http req body parser
const jsonParser = bodyParser.json();

const path = require('path');
const expressValidator = require('express-validator');

console.log(__dirname);
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, 'server/uploads')
  },
  filename: function (req, file, cb) {
    cb(null, file.fieldname + '-' + Date.now() + path.extname(file.originalname))
  }
})

const upload = multer({ storage: storage })

router.use(expressValidator());

router.param('post_id', post_controller.post_find);

router.get('/', post_controller.post_list);

router.post('/', upload.single('thumbnail'), post_controller.post_create);

router.post('/sort' , jsonParser, post_controller.posts_sort);

router.route('/:post_id([0-9]{1,3})')
.all(function(req, res, next) {
  next();
})
.get(post_controller.post_detail)
.patch(upload.single('thumbnail'), post_controller.post_update)
.delete(post_controller.post_delete);


module.exports = router;
