const path = require('path');

const webpack = require('webpack');
const config = require('../webpack.config');
const compiler = webpack(config);

const isDeveloping = process.env.NODE_ENV !== 'production';
const setup = require('./middlewares/frontendMiddleware');

const port = isDeveloping ? 3000 : process.env.PORT;
const webpackDevMiddleware = require("webpack-dev-middleware");
const webpackHotMiddleware = require("webpack-hot-middleware");
const middleware = webpackDevMiddleware(compiler, {
  noInfo: true,
  publicPath: '/',
  silent: true,
  stats: 'errors-only',
});
const fs = middleware.fileSystem;
const express = require('express');

const favicon = require('serve-favicon');
const logger = require('morgan'); //http logger
const dotenv = require('dotenv').config();
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser'); //http req body parser
const serveStatic = require('serve-static');
const methodOverride = require('method-override'); //allow put and delete method
const flash = require('express-flash');
const session = require('./config/session');
const httpProxy = require('http-proxy');

const index = require('./routes/index');
const post = require('./routes/post');
const admin = require('./routes/admin');

const app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));


app.use(middleware);
app.use(webpackHotMiddleware(compiler));


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(methodOverride(function (req, res) {
  if (req.body && typeof req.body === 'object' && '_method' in req.body) {
    // look in urlencoded POST bodies and delete it
    var method = req.body._method;
    delete req.body._method;
    return method;
  }
}));

app.set('trust proxy', 1);

if (isDeveloping) {

}
else {
  session.cookie.secure = true; // serve secure cookies
}

app.use(cookieParser());
app.use(session);
app.use(flash());

app.use(express.static(path.join(__dirname, 'public')));
app.use(express.static(path.join(__dirname, 'uploads')));
app.use(express.static(path.join(process.cwd(), 'dist')));

// app.get('*', (req, res) => {
//   fs.readFile(path.resolve(process.cwd(), 'dist', 'index.html'));
// });

app.get('*', (req, res) => {
  fs.readFile(path.join(compiler.outputPath, 'index.html'), (err, file) => {
    if (err) {
      res.sendStatus(404);
    } else {
      res.send(file.toString());
    }
  });
});

app.use('/', index);
app.use('/post', post);
app.use('/admin', admin);

// catch 404 and forward to error handler
app.use(function (req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// error handler
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
