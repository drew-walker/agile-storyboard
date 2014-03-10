'use strict';

angular.module('getAgileApp')
    .controller('LoginCtrl', function ($scope, loginService, $location) {
        $scope.auth = loginService.init();
        $scope.email = null;
        $scope.pass = null;

        $scope.login = function(cb) {
            loginService.login($scope.email, $scope.pass, function(err, user) {
                $location.path('/boards');
//                $scope.err = err? err + '' : null;
//                if ( !err ) {
//                    cb && cb(user);
//                }
            });
        };

//        loginService.logout();
    });
