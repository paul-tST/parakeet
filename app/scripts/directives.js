'use strict'

Parakeet.directives = angular.module('Parakeet.directives', []);

Parakeet.directives.directive('modal', function(){
	return {

		restrict: 'A',
		transclude: true,
		templateUrl: './partials/modal.html',
		link: function(scope, element, attrs){
			scope.title = "Title Here";
			scope.content = "Content Here";

		}

	}
});