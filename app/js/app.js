"use strict";

var Parakeet = angular.module('Parakeet', ['firebase', 'ngRoute', 'ui.bootstrap']);

Parakeet.constant('FIREBASEURL', 'https://smalltime-shopping.firebaseio.com/');

Parakeet.config(['$routeProvider', function($routeProvider) {
		$routeProvider
			// .when('/', {
			// 	templateUrl: './partials/home.html',
			// 	controller: 'MainCtrl'
			// })

			.when('/', {
				templateUrl: './partials/list.html',
				controller: 'ListCtrl'
			})

			.otherwise({redirectTo: '/'});
	}]);
