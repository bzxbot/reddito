'use strict';

/* global app:true */
/* exported app */

/**
 * @ngdoc overview
 * @name redditoApp
 * @description
 * # redditoApp
 *
 * Main module of the application.
 */
var app = angular
  .module('redditoApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch',
    'firebase'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/posts.html',
        controller: 'PostsCtrl'
      })
      .when('/posts/:postId', {
	templateUrl: 'views/showpost.html',
	controller: 'PostViewCtrl'
      })
      .otherwise({
	redirectTo: '/'
      });
  })
  .constant('FIREBASE_URL', 'https://resplendent-fire-6498.firebaseio.com/');
 
