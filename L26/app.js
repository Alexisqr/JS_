var app = angular.module("myApp", []);

			app.controller("MyController", function ($scope) {
				//1
				$scope.num= [3, 6, 4, 9]
                //2
				$scope.num2= [3, 6, 4, 9]
				//3
				$scope.num3 = [1, 2, 3, 4, 5]
				$scope.por3 = function() {
					$scope.num3 = $scope.num3.reverse();
				}
			
				//4
				$scope.num4 = [5, 4, 3, 2, 1]
				$scope.por4 = function() {
					 $scope.num4.sort();
				}
				//5
				$scope.movs5 = ['html', 'css', 'js', 'php'];
				$scope.in = 0;
				$scope.por5 = function() {
					
					if($scope.movs5.length>$scope.in){
						console.log($scope.movs5.length);
					$scope.movs5[$scope.in] = $scope.movs5[$scope.in]+'+';
					$scope.in = $scope.in+1;
				}
					
			   }
                //6
				$scope.users1 = ['Микола', 'Василь', 'Петро'];
				$scope.users2 = ['Аня', 'Валя', 'Маша'];
				$scope.add = function() {
				  if ($scope.users2.length > 1) {
					$scope.users1.push($scope.users2.shift());
				  } else {
					$scope.users1.push($scope.users2.shift());
					$scope.users1.sort();
				  }
				};
				//8
				$scope.workers = {
					Україна: ['Київ', 'Львів'],
					Польща: ['Варшава', 'Лодзь'],
					Великобританія: ['Лондон', 'Манчестер'],
				};				
				
			});
		