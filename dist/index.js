/*jshint esversion: 6*/

"use strict";

var _http = require('http');

var _http2 = _interopRequireDefault(_http);

var _express = require('express');

var _express2 = _interopRequireDefault(_express);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var app = (0, _express2.default)();

app.listen(7000);
console.log('Test Mock Server running at http://127.0.0.1:7000/');

// http.createServer((req, res) => {
//   res.writeHead(200, {'Content-Type': 'text/plain'});
//   res.end('Hello World');
// }).listen(7000);

require('./routes')(app);

module.exports = app;