'use strict';

angular.module('storyboardModule')
    .directive('boardSelector', function () {
        return {
            templateUrl: 'views/boardSelector.html',
            restrict: 'E'
        };
    });
