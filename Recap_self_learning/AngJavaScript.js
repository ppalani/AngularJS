
myapp=angular.module("myapp",[])
			 .filter("calcamt",function()
			 {
				 return function(item)
				 {

					return item.Rate*item.Quantity;
				 }
				 
				 
			 })
			 
			 .controller("mycontroller",function($scope){
				 
				 $scope.maxrow=5
				$scope.Muruga_location="Muruga.jpg"
				 $scope.products=
[
{"PROD_ID":"ST_101","PROD_NAME":"Plate","Rate":"30000000","PriceType":"Piece","create_date":"25-JAN-2019","Quantity":"5.36","Amount":0},
{"PROD_ID":"ST_101","PROD_NAME":"Box","Rate":"520036","PriceType":"Piece","create_date":"25-JAN-2019","Quantity":"8.36","Amount":0},
{"PROD_ID":"ST_101","PROD_NAME":"Bombay Plate","Rate":"693654","PriceType":"KG","create_date":"25-JAN-2018","Quantity":"2.36","Amount":0},
{"PROD_ID":"ST_101","PROD_NAME":"Kari Plate","Rate":"8741369","PriceType":"Piece","create_date":"25-JAN-2014","Quantity":"2.36","Amount":0},
{"PROD_ID":"ST_101","PROD_NAME":"Mani","Rate":"540000","PriceType":"KG","create_date":"25-JAN-2019","Quantity":"2.36","Amount":0},
{"PROD_ID":"ST_101","PROD_NAME":"Pooja articles","Rate":"860000","PriceType":"KG","create_date":"25-JAN-2019","Quantity":"2.36","Amount":0},
{"PROD_ID":"ST_101","PROD_NAME":"Aanda","Rate":"30000000","PriceType":"KG","create_date":"25-JAN-2012","Quantity":"7.36","Amount":0},
{"PROD_ID":"ST_101","PROD_NAME":"Aduku","Rate":"30000000","PriceType":"KG","create_date":"25-JAN-2013","Quantity":"4.36","Amount":0},
{"PROD_ID":"ST_101","PROD_NAME":"Kuvalai","Rate":"5280000","PriceType":"KG","create_date":"25-JAN-2014","Quantity":"3.36","Amount":0},
{"PROD_ID":"ST_101","PROD_NAME":"Mixer","Rate":"693000","PriceType":"Piece","create_date":"25-JAN-2019","Quantity":"5.36","Amount":0},
{"PROD_ID":"ST_101","PROD_NAME":"Grinder","Rate":"30000000","PriceType":"Piece","create_date":"25-JAN-2019","Quantity":"9.36","Amount":0},
{"PROD_ID":"ST_101","PROD_NAME":"Cuttle","Rate":"4520000","PriceType":"Piece","create_date":"25-JAN-2012","Quantity":"3.36","Amount":0},
{"PROD_ID":"ST_101","PROD_NAME":"Chair","Rate":"56396994","PriceType":"Piece","create_date":"25-MAR-2019","Quantity":"6.36","Amount":0},
{"PROD_ID":"ST_101","PROD_NAME":"Fridge","Rate":"30000000","PriceType":"Piece","create_date":"23-JUN-2019","Quantity":"8.36","Amount":0},
{"PROD_ID":"ST_101","PROD_NAME":"Wardrobe","Rate":"203669","PriceType":"Piece","create_date":"21-APR-2019","Quantity":"9.36","Amount":0},
{"PROD_ID":"ST_101","PROD_NAME":"Kettle","Rate":"563000","PriceType":"Piece","create_date":"25-JAN-2017","Quantity":"10.36","Amount":0}]
		

$scope.calculateAmt = function(item){
	item.Amount=item.Rate*item.Quantity;
}

$scope.customsearch=function (item)
{
	console.log('in custom search');
	console.log('search test from prod name lower case'+item.PROD_NAME.toLowerCase());
if($scope.searchtext==undefined || $scope.searchtext.length==0)
{
	console.log(item.PROD_NAME.toLowerCase());
	console.log($scope.searchtext);
	return true;
	
}

else
{
	if(item.PROD_NAME.toLowerCase().indexOf($scope.searchtext.toLowerCase())!=-1
	|| item.PriceType.toLowerCase().indexOf($scope.searchtext.toLowerCase())!=-1
	)
	{
		return true;
	}
	else
	{
		return false;
	}
	
	
}
	
}



		
			 });				 
