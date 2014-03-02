'use strict';

angular.module('getAgileApp')
    .directive('board', function () {
        return {
            templateUrl: 'views/board.html',
            restrict: 'E'
        };
    });
