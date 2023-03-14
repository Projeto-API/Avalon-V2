const createError = require('http-errors');
const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const methodOverride = require('method-override');

<<<<<<<< HEAD:avalon copy/src/app.js
var indexRouter = require('../src/routes/index');
var usersRouter = require('../src/routes/users');
var produtoRouter = require('../src/routes/produto');
var carrinhoRouter = require('../src/routes/carrinho');
var methodOverride = require('method-override')
========
const indexRouter = require('./routes/index');
const usersRouter = require('./routes/users');
const adminRouter = require('./routes/admin');

>>>>>>>> main:avalon/app.js

const app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(methodOverride('_method'));

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use(methodOverride('_method'));

app.use('/', indexRouter);
app.use('/users', usersRouter);
<<<<<<<< HEAD:avalon copy/src/app.js
app.use('/produto', produtoRouter);
app.use('/carrinho', carrinhoRouter);
========
app.use('/admin', adminRouter);
>>>>>>>> main:avalon/app.js


// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
