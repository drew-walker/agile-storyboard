'use strict';

angular.module('getAgileApp')
    .controller('LoginCtrl', function ($scope, $modal, $rootScope, firebaseRef, syncData, loginService, BoardService, $location) {
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

        $scope.createAccount = function() {
            $scope.err = null;

            loginService.createAccount($scope.email, $scope.pass, function(err, user) {
                if ( err ) {
                    $scope.err = err ? err + '' : null;
                } else {
                    // must be logged in before I can write to my profile
                    $scope.login(function() {
                        loginService.createProfile(user.uid, user.email);
                    });
                }
            });
        };

        $rootScope.$on("$firebaseSimpleLogin:login", function(e, user) {
            switch ($scope.auth.user.provider) {
                case "twitter":
                    $scope.profileImageUrl = $scope.auth.user.profile_image_url;
                    $scope.userName = $scope.auth.user.name;
                    break;
                case "facebook":
                    $scope.profileImageUrl = "http://graph.facebook.com/" + $scope.auth.user.username + "/picture";
                    $scope.userName = $scope.auth.user.name;
                    break;
                case "password":
                    $scope.profileImageUrl = null;
                    var userRef = syncData('users/' + $scope.auth.user.uid);
                    userRef.$on("loaded", function() {
                        $scope.userName = userRef.name;
                    });

                    userRef.$on("change", function() {
                        $scope.userName = userRef.name;
                    });

                    break;
            }
        });
    });
