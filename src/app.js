const express = require('express');
const morgan = require('morgan');
const helmet = require('helmet');
const cors = require('cors');
var mysql = require('mysql');
require('dotenv').config();

const middlewares = require('./middlewares');
const api = require('./api');


const app = express();

var DBConnect = "NOT CONNECTED"

app.use(morgan('dev'));
app.use(helmet());
app.use(cors());
app.use(express.json());



app.get('/', (req, res) => {
  res.redirect(301, 'https://loadsecure.framer.ai/')
  res.end();
});



app.use('/api/v1', api);

app.use(middlewares.notFound);
app.use(middlewares.errorHandler);

module.exports = app;
