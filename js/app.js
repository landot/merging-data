
"use strict";

angular.module('AddressBook', [])
	.controller('AddressController', function($scope) {
		$scope.employees = pawneeEmployees;
		$scope.sortCol = 'lastName';	
		$scope.sortBy = function(sortCol) {
			if( $scope.sortCol == sortCol) {
				$scope.sortReverse = !$scope.sortReverse;
			}else {
				$scope.sortCol = sortCol;
				$scope.sortReverse = false;
			}
			$scope.sortCol = sortCol;
		};
		$scope.isSortedBy = function(colName) {
			return colName ==$scope.sortCol;
		};
	});
