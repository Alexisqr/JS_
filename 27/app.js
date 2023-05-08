var app = angular.module("myApp", []);

			app.controller("MyController", function ($scope) {
				//1
				$scope.square = 0;

				$scope.calculateSquare = function() {
				  $scope.square = $scope.num * $scope.num;
				}
                //2
				$scope.showSquare = function () {
					$scope.square2 = $scope.num2 * $scope.num2;;
				}			
				//3
				$scope.nums = ['Ukraine', 'USA', 'Canada'];
				$scope.addNum = function () {
					$scope.nums.push($scope.newNum);
				}
			

			
				//4
				$scope.check = true;
		$scope.changeCheck = function () { $scope.check = false;}
		$scope.changeCheck2 = function () { $scope.check = true;}
				
				//5
				$scope.check3 = true;
		$scope.changeCheck3 = function () { $scope.check3 = !$scope.check3 ;}
		
                //6
				$scope.check4 = true;
				$scope.check5 = true;
				$scope.changeCheck4 = function () { $scope.check4 = !$scope.check4
					$scope.check5 = $scope.check4 ;}
					$scope.changeCheck5 = function () { $scope.check5 = !$scope.check5
						$scope.check4 = $scope.check5 ;}
				//7
				$scope.courses = {
					'html': true,
					'css': true,
					'php': false,
					'js': true,
					'angular': false,
				  };			
				
			});
		