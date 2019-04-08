const express = require('express');
const path = require('path');
const mongoose = require('mongoose');
const morgan = require('morgan');
const bodyParser = require('body-parser');

const app = express();
const port = process.env.PORT || 3004;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended : true }));
app.use(morgan('dev'));
app.use(express.static(path.join(__dirname, '../dist')));

app.listen(port, () => {
  console.log(`server running at: http://localhost:${port}`);
});
