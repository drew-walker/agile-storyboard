'use strict';

angular.module('getAgileApp')
    .directive('droppable', function () {
        return {
            restrict: 'A',
            link: function postLink(scope, element) {
                element.bind('dragover', function() {
                    this.classList.add('over');
                });

                element.bind('dragleave', function() {
                    this.classList.remove('over');
                });
            }
        };
    });