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

myApp.factory('fiveFactory', function(){
  var factory = {};

  var ranNum = function(){
    Math.floor(Math.random()*10+1);
    return Math.floor(Math.random()*10+1);
  };
  

});
