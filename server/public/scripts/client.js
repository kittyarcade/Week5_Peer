var myApp = angular.module('myApp', ['ngRoute']);

  myApp.config(['$routeProvider', function($routeProvider){
    $routeProvider
      .when('/home',{
        templateUrl:'views/characters/home.html',
        controller: 'homeController'
      })
      .when('/shaggy',{
        templateUrl:'views/characters/shaggy.html',
        controller: 'shaggyController'
      })
      .when('/bugs',{
        templateUrl:'views/characters/bugs.html',
        controller: 'bugsController'
      })
      .when('/wonder',{
        templateUrl:'views/characters/wonder.html',
        controller: 'wonderController'
      })
      .otherwise({
        redirectTo: 'home'
      });
  }]); //end of config
