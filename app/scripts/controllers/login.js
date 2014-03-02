'use strict';

angular.module('getAgileApp')
    .controller('LoginCtrl', function ($scope, $modal, $rootScope, firebaseRef, syncData, $firebaseSimpleLogin, BoardService, $location) {
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
            $location.path('/boards');
        };

        $scope.changeBoards = function(boardId) {
            var obj = syncData('boards/' + boardId);
            obj.$on('loaded', function() {
                $scope.selectedBoard = obj;
            });
        };

        $scope.auth = $firebaseSimpleLogin(firebaseRef());

        $rootScope.$on("$firebaseSimpleLogin:login", function(e, user) {
            switch ($scope.auth.user.provider) {
                case "twitter":
                    $scope.profileImageUrl = $scope.auth.user.profile_image_url;
                    break;
                case "facebook":
                    $scope.profileImageUrl = "http://graph.facebook.com/" + $scope.auth.user.username + "/picture";
            }
        });
    });
