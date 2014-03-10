'use strict';

angular.module('getAgileApp')
    .controller('TeamCtrl', function ($scope, firebaseRef, syncData, $rootScope) {
        $scope.userList = syncData('users/');

        $rootScope.$on("$firebaseSimpleLogin:login", function(e, user) {
            $scope.team = [];
            $scope.boardsIndex = new FirebaseIndex(firebaseRef('users/' + user.uid + '/boards'), firebaseRef('boards/'));
        });

        $rootScope.$on("$firebaseSimpleLogin:logout", function(e, user) {
            $scope.team = [];
        });

        $rootScope.$on('changeBoard', function(event, boardId) {
            $scope.team = [];

            $scope.selectedBoardId = boardId;

            $scope.teamsIndex = new FirebaseIndex(firebaseRef('teams/' + $scope.selectedBoardId), firebaseRef('users/'));

            $scope.teamsIndex.on('child_added', function(snapshot) {
                var person = snapshot.val();
                person.$id = snapshot.name();
                $scope.$apply(function() {
                    $scope.team.push(person);
                })
            });

            $scope.teamsIndex.on('child_removed', function(snapshot) {
                $scope.$apply(function() {
                    $scope.team = $scope.team.filter(function(person) {
                        return person.$id !== snapshot.name();
                    });
                });
            });
        });

//        $scope.teamMemberClicked = function() {
//            console.log($scope.newTeamMemberUserId);
//        };

        $scope.addPersonToTeam = function() {
            $scope.teamsIndex.add($scope.newTeamMemberUserId);
            firebaseRef('users/' + $scope.newTeamMemberUserId + '/boards/' + $scope.selectedBoardId).set(1);
            //$scope.boardsIndex.add($scope.selectedBoardId);
            $scope.newTeamMemberUserId = '';
        };

        $scope.removePersonFromTeam = function(userId) {
            //console.log(userId);
            $scope.teamsIndex.drop(userId);
            firebaseRef('users/' + userId + '/boards/' + $scope.selectedBoardId).remove();
            //$scope.boardsIndex.drop($scope.selectedBoardId);
        };

    });
