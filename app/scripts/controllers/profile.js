'use strict';

angular.module('getAgileApp')
    .controller('ProfileCtrl', function ($scope, $routeParams, syncData) {
        $scope.user = syncData('users/' + $routeParams.userId);

        $scope.save = function() {
            $scope.user.$save();
        };
    });
