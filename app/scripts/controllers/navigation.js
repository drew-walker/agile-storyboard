'use strict';

angular.module('getAgileApp')
    .controller('NavigationCtrl', function ($scope, $rootScope, syncData, firebaseRef, $modal, BoardService, $location) {
        $scope.boards = syncData('boards');
        //$scope.boards = [];

        $rootScope.$on("$firebaseSimpleLogin:login", function(e, user) {
            $scope.userIsLoggedIn = true;

            $scope.boardsIndex = new FirebaseIndex(firebaseRef('users/' + user.uid + '/boards'), firebaseRef('boards/'));

            $scope.boardsIndex.on('child_added', function(snapshot) {
                //$scope.boards = $scope.boardsIndex.dataRef;

                //console.log($scope.boardsIndex.childRefs);
                //$scope.boards.push(snapshot.val());
            });
        });

        $rootScope.$on("$firebaseSimpleLogin:logout", function(e, user) {
            $scope.userIsLoggedIn = false;
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
            BoardService.deleteBoard($scope.selectedBoardId);
            $location.path('/boards');
        };

        $scope.changeBoards = function(boardId) {
            var obj = syncData('boards/' + boardId);
            obj.$on('loaded', function() {
                $scope.selectedBoard = obj;
            });
        };
    });
