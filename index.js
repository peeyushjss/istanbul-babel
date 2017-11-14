/*jshint esversion: 6*/

"use strict";

import http from 'http';
import express from 'express';
const app = express();

app.listen(7000);
console.log('Test Mock Server running at http://127.0.0.1:7000/');

// http.createServer((req, res) => {
//   res.writeHead(200, {'Content-Type': 'text/plain'});
//   res.end('Hello World');
// }).listen(7000);

require('./routes')(app);

module.exports = app;