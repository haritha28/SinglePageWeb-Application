(function() {
	'use strict';

	angular.module('CounterApp', [])
	.controller('CounterController', CounterController);

	CounterController.$inject = ['$scope'];
	function CounterController($scope) {

		$scope.onceCounter = 0;
		$scope.

		$scope.showNumberOfWatchers = function () {

			console.log($scope)
		};

		$scope.countOnce = function() {
			$scope.onceCounter = 1;
		};

		$scope.upCounter = function () {
			$scope.counter++;
		}

		$scope.$watch('Counter', function (newValue, oldValue) {
			console.log("counteroldValue:", oldValue);
			console.log("counternewValue:", newValue);
		});

		$scope.$watch('onceCounter', function (newValue, oldValue) {
			console.log("once counteroldValue:", oldValue);
			console.log("once counternewValue:", newValue);
		});
	}

})();