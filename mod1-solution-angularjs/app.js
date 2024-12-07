(function () {
'use strict';

angular.module('LunchCheck', [])
.controller('LunchCheckController', LunchCheckController);

lunchCheckController.$inject = ['$scope'];
function LunchCheckController($scope) {
	$scope.lunchList = "";
	$scope.message = "";

	$scope.lunchMessage = function () {
		var items = $scope.lunchList.split(",");
		var numItems = 0;

		for (var i = 0; i < items.length; i++) {
			var item = items[i]?.trim(); // Removes whitespaces
			if (item !== "") {
				numItems++;
			}
		}

		if (numItems <= 3) {
			$scope.message = "Enjoy!";
		}
		if (numItems == 0) {
			$scope.message = "Please insert data first.";
		}
		else {
			$scope.message =  "Too much!";
		}
	};
};

})();