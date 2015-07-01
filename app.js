'use strict';

(function() {
  var app = angular.module('Instagram', ['ngRoute', 'ngMessages', 'satellizer', 'textAngular', 'ngResource'])


 app.config(function($routeProvider, $authProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/home.html',
        controller: 'HomeCtrl'
      })
      .when('/login', {
        templateUrl: 'views/login.html',
        controller: 'LoginCtrl'
      })
      .when('/signup', {
        templateUrl: 'views/signup.html',
        controller: 'SignupCtrl'
      })
      .when('/photo/:id', {
        templateUrl: 'views/detail.html',
        controller: 'DetailCtrl'
      })
      .when('/verse', {
        templateUrl: 'views/verse.html',
        controller: 'VerseCtrl'
      })
       .when('/verse/:id', {
        templateUrl: 'views/verses.html',
        controller: 'VerseCtrl'
      })

       .when('/search', {
        templateUrl: 'views/photos.html',
        controller: 'HomeCtrl'
      })
      .otherwise('/');



    $authProvider.loginUrl = 'https://instaverse-app-server.herokuapp.com/auth/login';
    $authProvider.signupUrl = 'https://instaverse-app-server.herokuapp.com/auth/signup';
    $authProvider.oauth2({
      name: 'instagram',
      url: 'https://instaverse-app-server.herokuapp.com/auth/instagram',
      redirectUri: 'https://dl.dropboxusercontent.com/u/2915774/instaverse-app/index.html',
      clientId: 'ab45872a1d1d438c969cfb5a813ead83',
      requiredUrlParams: ['scope'],
      scope: ['likes'],
      scopeDelimiter: '+',
      authorizationEndpoint: 'https://api.instagram.com/oauth/authorize'
    });
  })




 app.factory('Verse', ['$resource', function($resource) {

  return $resource('https://instaverse-app-server.herokuapp.com/api/verse', null, {

        'update': { method: 'PUT' }
    });
}])



   })();



