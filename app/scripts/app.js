var Parakeet = angular.module('Parakeet', ['firebase', 'Parakeet.directives'])
	// create a global constant
	.value('fbURL', 'https://smalltime-shopping.firebaseio.com/')
	
	// create an Items service
	.factory('Items', function(angularFireCollection, fbURL){
		return angularFireCollection(fbURL);
	});