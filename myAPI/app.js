var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var cors = require('cors');

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var empresaRouter = require('./routes/empresa')
var comentariosRouter = require('./routes/comentarios')
var juegosRouter = require('./routes/juegos')
var juegosUsersRouter = require('./routes/juegosUsuarios')

var app = express();

app.use(cors())

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/empresa', empresaRouter)
app.use('/comentarios', comentariosRouter)
app.use('/juegos', juegosRouter)
app.use('/juegosUsers', juegosUsersRouter)


module.exports = app;
