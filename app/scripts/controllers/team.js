'use strict';

angular.module('getAgileApp')
    .controller('TeamCtrl', function ($scope, firebaseRef, $rootScope) {
        $scope.team = [];

        $rootScope.$on('changeBoard', function(event, boardId) {
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




    });
