'use strict';
const express = require('express');
const bodyParser = require('body-parser');
const expressValidator = require('express-validator');
const app = express();
const expressOasGenerator = require('express-oas-generator');
expressOasGenerator.init(app, require('./swagger.json'));

const db = require('../api/dbFactory');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: true
})); 

app.use(expressValidator());


module.exports = app;