'use strict';

var get = require('get-value');

module.exports = function getFirst(o, paths) {
  if (!o) return null;
  if (!paths) {
    return o;
  }

  paths = Array.isArray(paths) ? paths : [paths];
  var len = paths.length;
  var i = 0;
  var res;

  while (i < len) {
    var path = paths[i++];
    var val = get(o, path);
    if (val != null) {
      return val;
    }
  }
  return null;
};
