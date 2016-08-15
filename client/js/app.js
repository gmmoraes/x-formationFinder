var myApp = angular.module('myApp', [
    'ui.router','ui.bootstrap']).
    
    config(function($stateProvider, $urlRouterProvider, $locationProvider) {
        $urlRouterProvider.otherwise("/home");
        $stateProvider
        
        .state('home', {
            url: "/home",
            views: {
                "home": { templateUrl: "partials/home.html", controller: 'homeCtrl'},
                "menu2": { templateUrl: "partials/home/menu2.html", controller: 'homeCtrl'},
                "menu3": { templateUrl: "partials/home/menu3.html", controller: 'homeCtrl'},
            }
        })
        .state('top-contributors', {
            url: "/top-contributors",
            templateUrl: "partials/topContributors.html",
            controller: 'topContributorsCtrl'
            
        })
        
        .state('repositories', {
            url: "/repositories",
            templateUrl: "partials/result.html",
            controller: 'resultCtrl'
            
        })
        

        

        $locationProvider.html5Mode({enabled: true, requireBase: false});
    });
    