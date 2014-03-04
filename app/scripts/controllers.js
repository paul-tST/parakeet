var Parakeet = angular.module('Parakeet');

Parakeet.controller('ListCtrl', ['$scope', 'Items', function($scope, Items){

	$scope.items = Items;

	$scope.addItem = function(){

		// Use Firebase object, with add method to append new Item
		$scope.items.$add({label: $scope.item.label, carted: false})

		// Clear the input field
		$scope.item.label = '';
	}

	/*$scope.cartItems = function(){

		angular.forEach($scope, function(val, key){
			
			if(val.carted == true){
				$scope.remove(val.$id);
			}

		})

	}*/

	/*$scope.remaining = function(){

		var count = 0;
		angular.forEach($scope.items, function(item) {
			if(typeof item === 'object'){
				console.log(item)	
			}
			//count += item.carted ? 0 : 1;
			
		});
		return count;
	}*/

}]);

Parakeet.controller('MainCtrl', ['$scope', function($scope){
	// check for cookie, if none, display login
	// if cookie exists, redirect to /:userID/list
}]);

Parakeet.controller('FooterCtrl', ['$scope', function($scope){
	$scope.currentYear = new Date().getFullYear();
	
}])