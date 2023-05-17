var app = angular.module("myApp", []);

			app.controller("MyController", function ($scope) {
				//3
				$scope.isParagraphVisible = false;

				$scope.hideParagraph = function() {
				  $scope.isParagraphVisible = false;
				}
			
				$scope.showParagraph = function() {
				  $scope.isParagraphVisible = true;
				}
				//4
				$scope.isParagraphVisible2 = false;

				$scope.hideParagraph2 = function() {
				  $scope.isParagraphVisible2 = !$scope.isParagraphVisible2;
				}
			
				//5
				$scope.checkbox1 = false;
				$scope.checkbox2 = false;
				$scope.checkbox3 = false;
				$scope.checkbox4 = false;

			
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
		