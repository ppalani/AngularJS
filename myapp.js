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


 */
var myApp=angular
				.module("myApp",[])
				.controller("myappcontroller",function ($scope){
	
	$scope.messsage="My sample message";
	
	var person ={
		fname:"praveen",
		lname:"Palani",
		gender:"Male"
		
		
	};
	$scope.student=person;
				}	
);

