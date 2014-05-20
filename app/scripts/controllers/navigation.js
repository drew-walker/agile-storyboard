'use strict';

angular.module('getAgileApp')
    .controller('NavigationCtrl', function ($scope, $rootScope, syncData, firebaseRef, $modal, BoardService, $location, $window) {
        $scope.boards = [];

        $rootScope.$on("$firebaseSimpleLogin:login", function(e, user) {
            $scope.boards = [];

            $scope.userIsLoggedIn = true;

            $scope.boardsIndex = new FirebaseIndex(firebaseRef('users/' + user.uid + '/boards'), firebaseRef('boards/'));

            $scope.boardsIndex.on('child_added', function(snapshot) {
                var board = snapshot.val();
                board.$id = snapshot.name();
                $scope.$apply(function() {
                    $scope.boards.push(board);
                })
            });

            $scope.boardsIndex.on('child_removed', function(snapshot) {
                $scope.$apply(function() {
                    $scope.boards = $scope.boards.filter(function(board) {
                        return board.$id !== snapshot.name();
                    });
                });
            });
        });

        $rootScope.$on("$firebaseSimpleLogin:logout", function(e, user) {
            $scope.userIsLoggedIn = false;
            $scope.boards = [];
        });

        $rootScope.$on('changeBoard', function(event, boardId) {
            $scope.selectedBoardId = boardId;
            $scope.changeBoards(boardId);
        });

        $scope.showNewStoryboardUI = function() {
            $modal.open({
                templateUrl: 'views/addNewStoryboard.html',
                controller: 'AddStoryboardCtrl'
            });
        };

        $scope.deleteStoryboard = function() {
            if ($window.confirm('Are you sure you want to delete this board?')) {
                BoardService.deleteBoard($scope.selectedBoardId);
                $location.path('/boards');
            }
        };

        $scope.changeBoards = function(boardId) {
            var obj = syncData('boards/' + boardId);
            obj.$on('loaded', function() {
                $scope.selectedBoard = obj;
            });
        };
    });
