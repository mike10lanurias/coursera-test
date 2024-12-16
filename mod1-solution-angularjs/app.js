(function () {
'use strict';

angular.module('LunchCheck', [])
.controller('LunchCheckController', LunchCheckController);

LunchCheckController.$inject = ['$scope'];
function LunchCheckController($scope) {
	$scope.lunchList = "";
	$scope.message = "";

	$scope.checkLunch = function () {
		if ($scope.lunchList.trim().length === 0) {
			$scope.message = "Please insert data first.";
		} else {
			var inputItems = $scope.lunchList.split(",");
			var lunchItems = inputItems.filter(function(i) {
				return i.trim() !== '';
			});

			if (lunchItems.length <= 3) {
				$scope.message = "Enjoy!";
			} else {
				$scope.message = "Too much!";
			}
		}
	};
}

})();
