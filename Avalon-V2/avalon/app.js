const createError = require('http-errors');
const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const methodOverride = require('method-override');
const session = require('express-session');
const flash = require('connect-flash');
const indexRouter = require('./routes/index');
const usersRouter = require('./routes/users');
const adminRouter = require('./routes/admin');
const produtoRouter = require('./routes/produto');
const carrinhoRouter = require('./routes/carrinho');


const app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use(methodOverride('_method'));
app.use(session({secret:'senhasecreta'}));
<<<<<<< HEAD:Avalon-V2/avalon/app.js
// app.use(express.cookieParser('secret'));
// app.use(express.cookieSession());

// app.use(session({resave: true,saveUninitialized: true}));

=======
>>>>>>> fac21a0e7e276989155fd7c7c685c377b067f16b:avalon/app.js
app.use(flash());
app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/admin', adminRouter);
app.use('/produto', produtoRouter);
app.use('/carrinho', carrinhoRouter);


// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};


  app.get('/users', (req, res) => {
    res.render('forgot-password', { messages: req.flash('erro ao enviar') });
  });

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
