'use strict';

angular.module('storyboardModule')
    .controller('LoginCtrl', function ($scope, $rootScope, $firebase, $firebaseSimpleLogin) {
        var ref = new Firebase('https://getagile.firebaseio.com/');
        $scope.auth = $firebaseSimpleLogin(ref);

//        $rootScope.$on("$firebaseSimpleLogin:login", function(e, user) {
//            console.log(user);
//            console.log($scope.auth);
//        });
    });
