(function () {

	var myapp = angular.module("LunchBox", []);

	myapp.controller("LunchBoxController", ['$scope', Checktoomuch]);

	function Checktoomuch($scope) {
		var length = $scope.lunchmenu.length;
		if (length <= 3) {
			return "Enjoy"
		}
		else {
			return "Toomuch"
		}
	}


})();