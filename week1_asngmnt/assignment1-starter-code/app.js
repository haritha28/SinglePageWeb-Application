(function () {

	var myapp = angular.module('LunchBox', [])

	myapp.controller('LunchBoxController', Checktoomuch);

	Checktoomuch.$inject = ['$scope','$filter'];
	
	function Checktoomuch () {

		var lunch = $scope.lunchmenu.trim();


		var items = lunch.split(',');
		if(items.length == 0) {
			return ("ADD ITEMS");
		}

		if(items.length <= 3) {
			return ("ENJOY!");
		}

		if(items.length >= 3) {
			return ("TOO BAD");
		}
	} 

	


})();