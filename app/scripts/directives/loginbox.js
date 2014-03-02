'use strict';

angular.module('getAgileApp')
  .directive('loginBox', function () {
    return {
      template: '<div></div>',
      restrict: 'E',
      link: function postLink(scope, element, attrs) {
        element.text('this is the loginBox directive');
      },
        controller: 'LoginCtrl'
    };
  });
