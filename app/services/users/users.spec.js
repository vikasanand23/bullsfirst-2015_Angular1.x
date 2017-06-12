/* Test Code */
//    describe('calculator', function () {
//		it('has a dummy spec to test 2 + 2', function() {
//		// An intentionally failing test. No code within expect() will never equal 4.
//		expect(2+2).toEqual(4);
//	  });
//    });
describe('mycontroller', function() {
    beforeEach(module('bullsfirst'));
	//Passed Test Case
    it('scopeTestSpec',
        inject(function($controller, $rootScope) {
            var $scope = $rootScope.$new();
            $controller('AccountsController', {
                $scope: $scope
            });
            //5.
            expect($scope.rows[0].name).toEqual('Brokerage Account 3');

        }));
    it('scopeTestSpecFunction',
        inject(function($controller, $rootScope) {
            var $scope = $rootScope.$new();
            $controller('AccountsController', {
                $scope: $scope
            });
            expect($scope.rows[0].cash).toEqual(1995826);
        }));
	it('scopeTestSpecFunction',
        inject(function($controller, $rootScope) {
            var $scope = $rootScope.$new();
            $controller('AccountsController', {
                $scope: $scope
            });
            expect($scope.rows[1].name).toEqual('Account 3');
        }));
	// Failed Test Case
	it('scopeTestSpecFunction',
        inject(function($controller, $rootScope) {
            var $scope = $rootScope.$new();
            $controller('AccountsController', {
                $scope: $scope
            });
            expect($scope.rows[1].name).toEqual('Vikas Anand');
        }));
});