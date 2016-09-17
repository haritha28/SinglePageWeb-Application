(function () {
	'use strict';

	angular.module('LunchBox', [])

	.controller('LunchBoxController',  Checktoomuch);

  function Checktoomuch ($scope, $filter, $injector){

    $scope.lunchmenu = "";
    $scope.message = "";
    $scope.result = "";


    var lunch = $scope.lunchmenu.trim();


    var items = lunch.split(',');
    if(items.length == 0) {
      $scope.message = "Add items";
      $scope.result = "error";
    }


    if(items.length <= 3) {
      $scope.message = "ENJOY";
      $scope.result = "success";
    }

    if(items.length >= 3) {
      $scope.message = "TOO BAD";
      $scope.result = "success";
    }


  };

})();