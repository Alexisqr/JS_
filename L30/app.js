var app = angular.module("myApp", []);

			app.controller("MyController", function ($scope) {
				//1
				$scope.users = [
					{ id: 1, name: 'John', age: 25 },
					{ id: 2, name: 'Mary', age: 32 },
					{ id: 3, name: 'Bob', age: 18 },
					{ id: 4, name: 'Ser', age: 25 },
					{ id: 5, name: 'Lort', age: 32 },
					{ id: 6, name: 'bobi', age: 18 }
				  ];
				  
				//2
				$scope.users2 = [
					{ id: 1, name: 'John', bir: '2005-06-10' },
					{ id: 2, name: 'Mary', bir: '1990-08-22' },
					{ id: 3, name: 'Bob', bir: '2010-10-05' }
					
				  ];
			
				//6
				$scope.reverseOrder = false;
			
				//8
				$scope.countries = [
					'Україна',
					'США',
					'Канада',
					'Великобританія',
					'Франція',
					'Німеччина',
					'Італія',
					'Китай'
				  ];
				  
				  $scope.selectedCountry = null;
				
				//9
				$scope.cities = [
					{name:'Київ', country:'Україна'},
					{name:'Львів', country:'Україна'},
					{name:'Нью-Йорк', country:'США'},
					{name:'Лос-Анджелес', country:'США'},
					{name:'Торонто', country:'Канада'},
					{name:'Лондон', country:'Великобританія'},
					{name:'Париж', country:'Франція'},
					{name:'Берлін', country:'Німеччина'},
					{name:'Рим', country:'Італія'},
					{name:'Пекін', country:'Китай'},
				];
				$scope.selectedCity = {};

$scope.selectCity = function(city) {
    $scope.selectedCity.name = city.name;
    $scope.selectedCity.country = city.country;
};
				//10
				$scope.countries2 = [    
	{name:'Україна', cities2:[{name:'Київ'}, {name:'Львів'}]},
    {name:'США', cities2:[{name:'Нью-Йорк'}, {name:'Лос-Анджелес'}]},
    {name:'Канада', cities2:[{name:'Торонто'}]},
    {name:'Великобританія', cities2:[{name:'Лондон'}]},
    {name:'Франція', cities2:[{name:'Париж'}]},
    {name:'Німеччина', cities2:[{name:'Берлін'}]},
    {name:'Італія', cities2:[{name:'Рим'}]},
    {name:'Китай', cities2:[{name:'Пекін'}]},
];
$scope.selectedCountry2 = {};

$scope.selectCountry2 = function(country2) {
    $scope.selectedCountry2 = country2;
};
			});
		