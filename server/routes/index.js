var express = require('express');
var router = express.Router();

const bodyParser = require('body-parser'); //http req body parser
const jsonParser = bodyParser.json();
const jwt = require('jsonwebtoken');

router.post('/login', jsonParser, function(req ,res ,next){
  if(!(req.body.auth.password === process.env.APP_PASS)){
    res.json({ success:false});
  }
  const token = jwt.sign({ foo: 'bar' }, process.env.JWT_SECRET);
  res.json({ success:true, jwt: token });
});

module.exports = router;
