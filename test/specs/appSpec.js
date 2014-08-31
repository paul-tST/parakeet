// Test Specs
describe('Study Center', function(){

	var scope
	,	$httpBackend;

	beforeEach(angular.mock.module('Parakeet'));

	beforeEach(angular.mock.inject(function($rootScope, $controller, _$httpBackend_, Items){
		//$httpBackend = _$httpBackend_;
		//$httpBackend.when('GET', 'Courses/course.json').respond({course:{id:1234}});

		scope = $rootScope.$new();
		$controller('ListCtrl', {$scope:scope});
	}))

	

	describe('Module Initialization', function(){
		it('should verify that the Parakeet app has been declared', function(){
			var app = angular.module('Parakeet');
			expect(app).not.toBe(undefined);
		});
	})

	describe('Controller Tests', function(){
		xit('should return a value of true for $scope.isStudent', function(){
			expect(scope.isStudent).toBe(true);
		})
	})

	describe('$httpBackend Tests', function(){
		afterEach(function() {
			$httpBackend.verifyNoOutstandingExpectation();
			$httpBackend.verifyNoOutstandingRequest();
		});
		
		xit('should return mock course data for a GET request', function(){
			//$httpBackend.expectGET('Courses/course.json')
			$httpBackend.flush();
			expect(scope.course).not.toBe(undefined);
			expect(scope.course.id).toBe(1234);
		})
	})
	

});