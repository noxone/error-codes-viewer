(function (root, factory) {
  if (typeof define === 'function' && define.amd)
    define(['exports', 'kotlin'], factory);
  else if (typeof exports === 'object')
    factory(module.exports, require('kotlin'));
  else {
    if (typeof kotlin === 'undefined') {
      throw new Error("Error loading module 'ktor-ktor-client-js-jsLegacy'. Its dependency 'kotlin' was not found. Please, check whether 'kotlin' is loaded prior to 'ktor-ktor-client-js-jsLegacy'.");
    }root['ktor-ktor-client-js-jsLegacy'] = factory(typeof this['ktor-ktor-client-js-jsLegacy'] === 'undefined' ? {} : this['ktor-ktor-client-js-jsLegacy'], kotlin);
  }
}(this, function (_, Kotlin) {
  'use strict';
  Kotlin.defineModule('ktor-ktor-client-js-jsLegacy', _);
  return _;
}));

//# sourceMappingURL=ktor-ktor-client-js-jsLegacy.js.map
