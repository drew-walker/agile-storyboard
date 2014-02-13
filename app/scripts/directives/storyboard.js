'use strict';

angular.module('storyboardModule')
    .directive('board', function () {
        return {
            templateUrl: 'views/board.html',
            restrict: 'E',
            controller: 'BoardCtrl'
        };
    });
