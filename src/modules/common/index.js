'use strict';

module.exports =
  angular.module('testFilters.common', [
    require('./directives').name,
    require('./filters').name,
    require('./services').name
  ]);
