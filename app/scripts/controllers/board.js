'use strict';

angular.module('storyboardModule')
    .controller('BoardCtrl', function ($scope, $firebase, $rootScope) {

        $scope.changeBoards = function(boardName) {
            var columnReference = new Firebase('https://getagile.firebaseio.com/boards/' + boardName + '/columns');
            $scope.columns = $firebase(columnReference);
        };

        $rootScope.$on('boardWillChange', function(event, boardName) {
            $scope.changeBoards(boardName);
        });

        $rootScope.$broadcast('boardWillChange', 'troys-awesome-board');
    });
