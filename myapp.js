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
var employees =
[

{Name:"Ben",tech:"FICC",Salary:"23400.56",DOB:new Date("13-MAY-1989")},
{Name:"Sara",tech:"java",Salary:"34400",DOB:new Date("16-JUN-1976")},
{Name:"Niamh",tech:"C3",Salary:"45400.56",DOB:new Date("18-AUG-1976")},
{Name:"Maurice",tech:"Business",Salary:"56400.56",DOB:new Date("22-MAY-1976")},
{Name:"Bala",tech:"Oralce",Salary:"67400.562323",DOB:new Date("12-NOV-1976")},
{Name:"Bruno",tech:"SCRUM",Salary:"78400.56",DOB:new Date("11-DEC-1976")},




]

$scope.employees=employees;
$scope.rowlim=3;
$scope.sortcol="Name";

				}
);
