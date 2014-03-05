'use strict';

angular.module('getAgileApp')
    .factory('loginService', function ($firebaseSimpleLogin, firebaseRef, syncData, profileCreator, $log) {
        var auth = null;

        return {
            init: function () {
                return auth = $firebaseSimpleLogin(firebaseRef());
            },

            auth: function() {
                return auth;
            },

            login: function(email, pass, callback) {
                assertAuth();
                auth.$login('password', {
                    email: email,
                    password: pass,
                    rememberMe: true
                }).then(function(user) {
                        if( callback ) {
                            callback(null, user);
                        }
                    }, callback);
            },

            loginWithFacebook:function() {
                assertAuth();
                auth.$login('facebook').then(function(user) {
                    firebaseRef('users/' + user.uid).once('value', function(profile) {
                        console.log(profile.val());
                        if (!profile.val()) {
                            profileCreator(user.uid, "");
                        }
                    });
                });
            },

            logout: function() {
                assertAuth();
                auth.$logout();
            },

            createAccount: function(email, pass, callback) {
                assertAuth();
                auth.$createUser(email, pass).then(function(user) { callback && callback(null, user) }, callback);
            },

            createProfile: profileCreator
        };

        function assertAuth() {
            if (auth === null) { throw new Error('Must call loginService.init() before using its methods'); }
        }
    })
    .factory('profileCreator', function(firebaseRef, $timeout) {
        return function(id, email, callback) {
            console.log(id);
            firebaseRef('users/' + id).set({ email: email }, function() {
                if (callback) {
                    $timeout(function() {
                        callback(err);
                    })
                }
            });
        };
    });
