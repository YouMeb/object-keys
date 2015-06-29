'use strict';

module.exports = function (obj) {
  var keys = [];
  var key;

  for (key in obj) {
    if (obj.hasOwnProperty(key)) {
      keys.push(key);
    }
  }

  return keys;
};
