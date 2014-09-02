'use strict';

var Parakeet = angular.module('Parakeet');

Parakeet.controller('ListCtrl', ['$scope', 'Items', function($scope, Items){

	$scope.hasCarted = false;
	$scope.items = undefined;
	Items.$asArray().$loaded().then(function(data){
		$scope.items = data;
	});
	checkHasCarted();
	$scope.addItem = function(){

		// Use Firebase object, with add method to append new Item
		$scope.items.$add({label: $scope.item.label, carted: false});

		// Clear the input field
		$scope.item.label = '';
		checkHasCarted();
	};

	$scope.cartItems = function(){
		angular.forEach($scope.items, function(item){
			if(item.carted === true){
				$scope.items.$remove(item);
			}
		});
		checkHasCarted();
	};
	
	function checkHasCarted(){
		$scope.hasCarted = false;
		angular.forEach($scope.items, function(item){
			if(item.carted === true){
				$scope.hasCarted = true;
			}
		});
	}
	
}]);

Parakeet.controller('MainCtrl', ['$scope', function($scope){
	// check for cookie, if none, display login
	// if cookie exists, redirect to /:userID/list
}]);

Parakeet.controller('FooterCtrl', ['$scope', function($scope){
	$scope.currentYear = new Date().getFullYear();
	
}]);