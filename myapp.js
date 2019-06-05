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
	
var technologies=[
{Name:"JAVA",likes:0,dislikes:0},
{Name:"Python",likes:0,dislikes:0},
{Name:"Ruby",likes:0,dislikes:0},
{Name:"C++",likes:0,dislikes:0},
{Name:"C#",likes:0,dislikes:0},
{Name:"Ruby on rails",likes:0,dislikes:0}



];
$scope.technologies=technologies;


$scope.increment=function(technology)
{
technology.likes++;
};
	
	$scope.decrement=function(technology)
{
technology.dislikes++;
};
	
	
				}	
);