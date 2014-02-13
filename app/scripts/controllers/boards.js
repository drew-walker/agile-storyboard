'use strict';

angular.module('storyboardModule')
    .controller('BoardsCtrl', function ($scope, $firebase) {
        var boardsReference = new Firebase('https://getagile.firebaseio.com/boards');
        $scope.boards = $firebase(boardsReference);
    });
