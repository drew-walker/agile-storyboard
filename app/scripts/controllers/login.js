'use strict';

angular.module('getAgileApp')
    .controller('LoginCtrl', function ($scope, loginService) {
        $scope.auth = loginService.init();
        $scope.email = null;
        $scope.pass = null;

        $scope.login = function(cb) {
            loginService.login($scope.email, $scope.pass, function(err, user) {
                $scope.err = err? err + '' : null;
                if ( !err ) {
                    cb && cb(user);
                }
            });
        };
    });
