'use strict';

angular.module('getAgileApp', ['getAgileApp.config', 'getAgileApp.service.firebase', 'firebase', 'ui.sortable', 'ui.utils', 'ui.bootstrap', 'ngRoute'])
    .config(function($routeProvider) {

        $routeProvider.when('/boards', {
            templateUrl: 'views/board.html',
            controller: function($scope, $location, BoardService) {
                var firstBoard = BoardService.getFirstBoard();
                firstBoard.$on('loaded', function() {
                    $location.path('/boards/' + firstBoard[firstBoard.$getIndex()[0]].slug);
                });
            }
        }).when('/boards/:boardSlug', {
            templateUrl: 'views/board.html',
            controller: 'BoardCtrl'
        }).when('/releases/:boardSlug', {
            templateUrl: 'views/releases.html',
            controller: 'ReleaseCtrl'
        }).when('/release-notes', {
            templateUrl: 'views/release-notes.html',
            controller: 'ReleaseNotesCtrl'
        }).when('/profile/:userId', {
            templateUrl: 'views/profile.html',
            controller: 'ProfileCtrl'
        }).when('/login', {
            templateUrl: 'views/login.html',
            controller: 'LoginCtrl'
        }).when('/home', {
            templateUrl: 'views/home.html',
            controller: 'HomeCtrl'
        }).otherwise({
            redirectTo: '/login'
        });

    })
    .factory('socket', function() {
        return io.connect('/upload');
    })
    .filter('slug', function () {
        return function (input) {
            if (input) {
                return input.toLowerCase().replace(/[^a-z_]/g, '-');
            }
        };
    });