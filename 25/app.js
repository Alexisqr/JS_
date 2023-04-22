var app = angular.module("myApp", []);

			app.controller("MyController", function ($scope) {
				//1
				$scope.name = 'Петро';
				$scope.surname = 'Петренко';
				$scope.age = '25';
                //2
				$scope.langs = {
					name: 'Петро',
					surname: 'Петренко',
					age: '25',
				}
				//3
				$scope.mov = ['html', 'css', 'js', 'php']
				$scope.lan = {
					Варшава: 'Польща',
					Вільнюс: 'Литва',
					Київ: 'Україна',
				}
				//4
				$scope.workers = [
					{name: 'Микола', age: 30, salary: 400},
					{name: 'Василь', age: 31, salary: 500},
					{name: 'Петро', age: 32, salary: 600},
				];
				//5
				$scope.name2 = 'Іван';
				$scope.show = function() {
					$scope.name2 = 'Дмитро';
				}
                //6
				$scope.name3 = 'Іван';
				$scope.surname3 = 'Іванів';
				$scope.age3 = 25;
				$scope.showName = function() {
					$scope.name3 = 'Петро';
				}
				$scope.showSurname = function() {
					$scope.surname3 = 'Петренко';
				}
				$scope.showAge = function() {
					$scope.age3 = 30;
				}
				//7
				$scope.movs = ['html', 'css', 'js', 'php'];
				$scope.showl = function() {
					for(i=0;i<($scope.movs).length;i++){
						if($scope.movs[i] == 'php'){
							$scope.movs[i] = 'sql';
						}

					}
					
				}
				//8
				$scope.movs2 = ['html', 'css', 'js', 'php'];
				$scope.sqlplus = function() {
					$scope.movs2.push('sql');
				}
				//9
				$scope.movs3 = ['html', 'css', 'js', 'php'];
				$scope.sqlplus2 = function() {
					$scope.movs3.unshift('sql');
				}
				//10.1
				
				$scope.movs4 = ['html', 'css', 'js', 'php'];
				$scope.del = function() {
					for(i=0;i<($scope.movs4).length;i++){
						if($scope.movs4[i] == 'php'){
							$scope.movs4.splice(i, 1);;
						}

					}
					
				}
				//10.2
				
				$scope.movs5 = ['html', 'css', 'js', 'php'];
				$scope.del2 = function() {					
							$scope.movs5.pop();				
					
				}
				//11.1
				
				$scope.movs6 = ['html', 'css', 'js', 'php'];
				$scope.del3 = function() {
					for(i=0;i<($scope.movs6).length;i++){
						if($scope.movs6[i] == 'html'){
							$scope.movs6.splice(i, 1);;
						}

					}
					
				}
				//11.2
				
				$scope.movs7 = ['html', 'css', 'js', 'php'];
				$scope.del4 = function() {					
							$scope.movs7.shift();				
					
				}
			});
		