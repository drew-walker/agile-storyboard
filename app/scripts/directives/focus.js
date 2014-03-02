'use strict';

angular.module('getAgileApp')
  .directive('focus', function ($timeout) {
    return {
      link: function postLink(scope, element, attrs) {
          $timeout(function() {
              element[0].focus();
          }, 250)
      }
    };
  });
