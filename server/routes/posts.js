const express = require('express');
const router = express.Router();

const post_controller = require('../controllers/postController');

const multer  = require('multer');
const path = require('path');
const expressValidator = require('express-validator');

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, 'uploads/')
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

router.route('/:post_id([0-9]{1,3})')
.all(function(req, res, next) {
  next();
})
.get(post_controller.post_detail)
.put(upload.single('thumbnail'), post_controller.post_update)
.delete(post_controller.post_delete);


module.exports = router;
