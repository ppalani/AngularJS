///<script src ="https://ajax.googleapis.com/ajax/libs/angularjs/1.7.8/angular.min.js"></script>


/* var myApp=angular.module("myApp",[]);


var mycontroller=function ($scope){
	
	$scope.messsage="My sample message";
	
	var person ={
		fname:"praveen",
		lname:"Palani",
		gender:"Male"
		
		
	};
	$scope.student=person;
	
};


myApp.controller("myappcontroller",mycontroller);


//  */
// var myApp=angular
// 				.module("myApp",[])
// 				.controller("myappcontroller",function ($scope){
	
// 	$scope.messsage="My sample message";
	
// 	var person ={
// 		fname:"praveen",
// 		lname:"Palani",
// 		gender:"Male"
		
		
// 	};
// 	$scope.student=person;
// 				}	
// );

///part 4 :

// var myApp=angular
// 				.module("myApp",[])
// 				.controller("myappcontroller",function ($scope){
	
// 	$scope.messsage="My sample message";
	
// 	var country ={
// 		name:"Pallava Kingdom",
// 		capital:"Kanchipuram",
// 		flag:"flag_of_Pallava_Kingdom.png"
		
		
// 	};
// 	$scope.country=country;
// 				}	
// );s


				var myApp=angular
				.module("myApp",[])
				.controller("myappcontroller",function ($scope){
	
var fruit=[{Name:"Tomato",colour:"Red",Family:"berry"},
{Name:"strawberries",colour:"Rose",Family:"Aggregate fruit"},
{Name:"peppers",colour:"Green",Family:"berry"},
{Name:"peas",colour:"Green",Family:"Legumes"},
{Name:"olives",colour:"Black",Family:"Drupe"}
];

var country=[
{
	Name:"India",
	Cities:[
	{city:"Delhi"},
	{city:"Kanchipuram"},
	{city:"Chennai"}
	]
},
{
	Name:"France",
	Cities:[
	{city:"Paris"},
	{city:"Nice"},
	{city:"Versalies"}
	]
},
{
	Name:"Ireland",
	Cities:[
	{city:"Dublin"},
	{city:"Wicklow"},
	{city:"Cork"}
	]
}

];



	$scope.countries=country;
	
	
	
				}	
);