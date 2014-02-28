'use strict';

angular.module('storyboardModule')
    .directive('draggable', function () {
        return {
            restrict: 'A',
            scope: { onMove: '&' },
            link: function postLink(scope, element) {
                element.attr('draggable', 'true');

                element.bind('dragstart', function() {
                    console.log('started dragging');
                });

                element.bind('dragend', function() {
                    scope.onMove();
                });
            }
        };
    });