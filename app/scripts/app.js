
angular.module('getAgileApp', ['getAgileApp.config', 'getAgileApp.service.firebase', 'firebase', 'ui.sortable', 'ui.utils', 'ui.bootstrap', 'ngRoute'])
    .config(function($routeProvider) {

        $routeProvider.when('/boards', {
            templateUrl: 'views/board.html',
            controller: function($location, BoardService) {
                var firstBoard = BoardService.getFirstBoard();
                firstBoard.$on("loaded", function(snapshot) {
                    $location.path("/boards/" + firstBoard.$getIndex()[0]);
                });
            }
        }).when('/boards/:boardId', {
            templateUrl: 'views/board.html',
            controller: 'BoardCtrl'
        }).when('/dashboard', {
            templateUrl: 'views/dashboard.html',
            controller: 'DashboardCtrl'
        }).when('/release-notes', {
            templateUrl: 'views/release-notes.html',
            controller: 'ReleaseNotesCtrl'
        }).when('/profile/:userId', {
            templateUrl: 'views/profile.html',
            controller: 'ProfileCtrl'
        });

    });