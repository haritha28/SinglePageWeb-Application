(function () {
	'use strict';

	var myApp = angular.module("myFirstApp", []); //array shows the dependencies
	myApp.controller ("MyFirstController", function($scope){
		$scope.name = "Yakoov";
	});

})();