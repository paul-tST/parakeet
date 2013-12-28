var paraMainCtrl = function($scope, Items){

	$scope.items = Items;
	
	$scope.addItem = function(){
		
		// Use Firebase object, with add method to append new Item
		Items.add({label: $scope.item.label, carted: false})

		// Clear the input field
		$scope.item.label = '';
	}

	$scope.cartItems = function(){

		angular.forEach(Items, function(val, key){
			
			if(val.carted == true){
				Items.remove(val.$id);
			}

		})

	}

	$scope.remaining = function(){

		var count = 0;
	    angular.forEach(Items, function(item) {
			count += item.carted ? 0 : 1;
	    });
	    return count;
	}
}
paraMainCtrl.$inject = ['$scope', 'Items'];