const path = require('path');

const isDeveloping = process.env.NODE_ENV !== 'production';
const setup = require('./middlewares/frontendMiddleware');

const express = require('express');

const favicon = require('serve-favicon');
const logger = require('morgan'); //http logger
const dotenv = require('dotenv').config();
const cookieParser = require('cookie-parser');
const serveStatic = require('serve-static');
const flash = require('express-flash');
const session = require('./config/session');

const index = require('./routes/index');
const post = require('./routes/post');
const admin = require('./routes/admin');

const app = express();

app.use(session);
app.use(cookieParser());
app.use(flash());
app.use(logger('dev'));

app.use('/api/', index);
app.use('/api/post', post);
app.use('/api/admin', admin);

//setup app rendering react front end
setup(app, {
  outputPath: path.resolve(process.cwd(), 'dist'),
  publicPath: '/',
});

if (isDeveloping) {

}
else {
  app.set('trust proxy', 1);

  // session.cookie.secure = true; // serve secure cookies
}

app.use(express.static(path.join(__dirname, 'public')));
app.use(express.static(path.join(__dirname, 'uploads')));

// catch 404 and forward to error handler
app.use(function (req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// error handler
app.use(function (err, req, res, next) {
  res.status(err.status || 500);
  res.json({
    error: err.message
  })
});

module.exports = app;
