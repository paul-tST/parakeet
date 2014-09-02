/* global Firebase */
'use strict'; 

var Parakeet = angular.module('Parakeet');

Parakeet.factory('Items', ['$firebase', 'FIREBASEURL', function($firebase, FIREBASEURL){
	return $firebase(new Firebase(FIREBASEURL));
}]);