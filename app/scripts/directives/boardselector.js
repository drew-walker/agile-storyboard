'use strict';

angular.module('getAgileApp')
    .directive('boardSelector', function () {
        return {
            templateUrl: 'views/boardSelector.html',
            restrict: 'E'
        };
    });
