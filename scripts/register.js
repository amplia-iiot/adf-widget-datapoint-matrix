'use strict';

var token = require('./utils/token'),
  registerWidget = require('./utils/registerWidget'),
  reader = require('./utils/read-config-stdin');

reader.readConfiguration(function (config) {
    token.getToken(config, function (token) {
    registerWidget.register(config, token);
  });
});
