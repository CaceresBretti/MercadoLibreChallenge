"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var config = require('./config/config');

var app = require('./server/express');

app.listen(config.port, function () {
  console.log("The application has started on port ".concat(config.port, " (").concat(config.env, ")"));
});
var _default = app;
exports["default"] = _default;