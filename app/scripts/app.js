'use strict';

angular.module('Parakeet', ['firebase', 'ngRoute', 'ui.bootstrap'])	

	.value('firebaseURL', 'https://smalltime-shopping.firebaseio.com/')

	.config(['$routeProvider', function($routeProvider) {
		$routeProvider
			.when('/', {
				templateUrl: './partials/home.html',
				controller: 'MainCtrl'
			})

			.when('/list', {
				templateUrl: './partials/list.html',
				controller: 'ListCtrl'
			})

			.otherwise({redirectTo: '/'})
	}])
