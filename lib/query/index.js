'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _after = require('./after');

Object.keys(_after).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _after[key];
    }
  });
});

var _demand2 = require('./demand');

Object.keys(_demand2).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _demand2[key];
    }
  });
});

var _filter = require('./filter');

Object.keys(_filter).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _filter[key];
    }
  });
});

var _split = require('./split');

Object.keys(_split).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _split[key];
    }
  });
});

var _url = require('./url');

Object.keys(_url).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _url[key];
    }
  });
});
exports.getQuery = getQuery;

var _constants = require('../constants');

function getQuery() {
  var config = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  var demand = config.demand,
      demandTemplate = config.demandTemplate,
      template = config.template,
      value = config.value;

  if (template) {
    var alsoChunks = value.split(_constants.ALSO);
    if (alsoChunks.length > 1) {
      var andQueriesString = String(alsoChunks.map(function (valueString) {
        return template.replace(/\{\{value\}\}/g, valueString);
      }));
      return JSON.parse('{ ' + _constants.AND + ': ' + andQueriesString + ' }');
    } else {
      var queryString = template.replace(/\{\{value\}\}/g, value);
      return JSON.parse(queryString);
    }
  } else if (demandTemplate) {
    // demand
    var _demand = (0, _demand2.getDemand)({ template: demandTemplate, value: value });
    // query
    return (0, _demand2.getQueryFromDemand)(_demand);
  }
  return value;
}