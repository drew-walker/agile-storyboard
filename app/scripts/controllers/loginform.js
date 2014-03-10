'use strict';

angular.module('getAgileApp')
    .controller('LoginFormCtrl', function ($scope, $modalInstance, loginService, $location) {
        $scope.credentials = {};

        $scope.login = function() {
            loginService.login($scope.credentials.emailAddress, $scope.credentials.password, function() {
                $modalInstance.dismiss();
                $location.path('/boards');
            });
        };

        $scope.cancel = function() {
            $modalInstance.dismiss();
        };
    });
