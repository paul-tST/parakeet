'use strict';

angular.module('Parakeet', ['firebase', 'ngRoute', 'Parakeet,directives', 'ui.bootstrap'])	
	.config(function ($routeProvider, $locationProvider) {
    	$routeProvider
      		.when('/', {
        		templateUrl: './partials/home.html',
        		controller: 'MainCtrl'
      		})
      		
      		.when('/list', {
      			templateUrl: './partials/list.html',
      			controller: 'ListCtrl'
      		})

      		.otherwise({
        		redirectTo: '/'
      		})
      //$locationProvider.html5Mode(true);
  })

	// create a global constant
	.value('firebaseURL', 'https://smalltime-shopping.firebaseio.com/')
	
	// create an Items service
	.factory('Items', function(angularFireCollection, firebaseURL){
		return angularFireCollection(firebaseURL);
	})