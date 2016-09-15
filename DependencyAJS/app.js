(function () {

	var myapp = angular.module("DIApp", []);

	myapp.controller("DIController", DIController);

	function DIController ($scope, $filter, $injector) {

		$scope.name = "Harry"

		$scope.upper = function () {
			var upCase = $filter('uppercase');
			$scope.name = upCase($scope.name);
		};

	}

	function AnnonateMe(name, job, blah) {
		return "Blah";
	}

	console.log(AnnonateMe.toString());

})();