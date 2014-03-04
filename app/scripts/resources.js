var Parakeet = angular.module('Parakeet');

Parakeet.factory('Items', ['$firebase', 'firebaseURL', function($firebase, firebaseURL){
	return $firebase(new Firebase(firebaseURL));
}])