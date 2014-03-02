'use strict';

angular.module('getAgileApp')
    .controller('LoginCtrl', function ($scope, $modal, $rootScope, firebaseRef, syncData, $firebaseSimpleLogin, BoardService) {
        $scope.boards = syncData('boards');
        $rootScope.$on('changeBoard', function(event, boardId) {
            $scope.selectedBoardId = boardId;
            $scope.changeBoards(boardId);
        });

        $scope.showNewStoryUI = function() {
            $modal.open({
                templateUrl: 'views/addNewStory.html',
                controller: 'AddStoryCtrl',
                resolve: {
                    selectedBoardId: function() {
                        return $scope.selectedBoardId;
                    }
                },
                backdrop: 'static'
            });
        };

        $scope.showNewStoryboardUI = function() {
            $modal.open({
                templateUrl: 'views/addNewStoryboard.html',
                controller: 'AddStoryboardCtrl'
            });
        };

        $scope.showNewColumnUI = function() {
            $modal.open({
                templateUrl: 'views/addNewColumn.html',
                controller: 'AddColumnCtrl',
                resolve: {
                    selectedBoardId: function() {
                        return $scope.selectedBoardId;
                    }
                }
            });
        };

        $scope.deleteStoryboard = function() {
            BoardService.deleteBoard($scope.selectedBoardId);
        };

        $scope.changeBoards = function(boardId) {
            var obj = syncData('boards/' + boardId);
            obj.$on('loaded', function() {
                $scope.selectedBoard = obj;
            });
        };

        $scope.auth = $firebaseSimpleLogin(firebaseRef());

//        $rootScope.$on("$firebaseSimpleLogin:login", function(e, user) {
//            console.log(user);
//            console.log($scope.auth);
//        });
    });
