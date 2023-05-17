var app = angular.module("myApp", []);

			app.controller("MyController", function ($scope) {
				//1
				$scope.nums = ['Ukraine', 'USA', 'Canada'];
				$scope.addNum = function () {
					$scope.nums.push($scope.newNum);
					$scope.newNum = '';
					$scope.nums.sort();
				}
				$scope.delNum = function () {
					$scope.nums.splice($scope.delIndex - 1, 1);
				}
				//2
				$scope.nums2 = ['Ukraine', 'USA', 'Canada'];
				$scope.addNum2 = function () {
					$scope.nums2.push($scope.newNum2);
					$scope.newNum = '';
					$scope.nums2.sort();
				}
				$scope.delNum2 = function () {
					var delNum2LC = String($scope.delIndex2).toLowerCase();
					//toLowerCase - приводить до нижнього регістра
					var delIndex3 = $scope.nums2.findIndex(function (country) {
						//findIndex()повертає індекс (позицію) першого елемента, який пройшов перевірку.
						//console.log(country.toLowerCase());
						//console.log(delNum2LowerCase);
						return country.toLowerCase() == delNum2LC;
					});
					if (delIndex3 !== -1) {
						$scope.nums2.splice(delIndex3, 1);
					} else {
						alert('Країна не знайдена.');
					}
				};	
				//3
				$scope.countries = ['Ukraine', 'USA', 'Canada','Перу','плщлщ'];
				$scope.search = function(country) {
					if (!$scope.searchP) {
					  return true;
					}
					for (var i = 0; i < country.length; i++) {
						if (country[i] === 'П' || country[i] === 'п') {
						  return true;
						}
					  }
					  return false;
				  };

			
				//4
				$scope.updateCheckboxes = function() {
					var checkboxNumbers = $scope.inputValue.split(',');
					$scope.checkboxes = $scope.checkboxes.map(function(val, idx) {
					  if (checkboxNumbers.includes((idx+1).toString())) {
						return true;
					  } else {
						return false;
					  }
					});
					if ($scope.inputValue === '') {
					  $scope.checkboxes = $scope.checkboxes.map(function() { return false; });
					}
				  };
				  
				  $scope.checkboxes = [false, false, false]; // Початкові стани чекбоксів
				
				//5
				$scope.users1 = ['Микола', 'Василь', 'Петро'];
				$scope.users2 = ['Іван', 'Дмитро', 'Андрій'];
				$scope.add = function() {

				  if ($scope.users2.length!=0) {
					$scope.users1.push($scope.users2.shift());
				 
				  }
				};
                //6
				$scope.numbers6 = [1, 2, 3, 4, 5];

				$scope.sum = function() {
				  return $scope.numbers6.reduce(function(acc, curr) {
					return acc + curr;
				  }, 0);
				};
			
				$scope.addNumber6 = function() {
				  var newNum6 = parseInt($scope.newNumber6);
				  console.log($scope.numbers6);
				  if (!isNaN(newNum6)) {
					$scope.numbers6.push(newNum6);
					$scope.newNumber6 = '';
					
				  }
				};
						
				
			});
		