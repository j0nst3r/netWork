angular.module('SearchController', ['DataService']).controller('SearchController', function($scope, $http, dataService) {	
	var temp = {id:1, "name":"JC","jobTitle":"Software Consultant","company":"Thomson Reuters"};
	$scope.results = [{id:1, name:"JC",jobTitle:"Software Consultant",company:"Thomson Reuters"}];
	$scope.testData = [];

	

	
 //    $scope.handleSubmit = function() {
		
	// 	dataService.testService().then(	function(searchResult){
	// 		resultList = searchResult; 
		
	// 		console.log("In dataService promise function b4 cpy: " + JSON.stringify(resultList));
	// 		console.log("In dataService promise function b4 cpy: " + JSON.stringify($scope.results));
		
	// 		//try the same logic as below...but only after i get the "promise" reponse back from the dataservice call
	// 		//tried a different method both doesnt work, but both shows that $scope.results are updated to new value.
	// 		$scope.results.length = 0;
	// 		var i = 0;
	// 		for (i = 0; i < resultList.length ;i++) {
	// 			$scope.results.push({
	// 				id : resultList[i].id,
	// 				name : resultList[i].name,
	// 				jobTitle : resultList[i].jobTitle,
	// 				company : resultList[i].company});
	// 		}
			
	// 		console.log("In dataService promise function after cpy: " + JSON.stringify(resultList));
	// 		console.log("In dataService promise function after cpy: " + JSON.stringify($scope.results));
			
			
	// 	});
		
		
	// 	//changing the temp value right under the search criteria for testing purpose....
	// 	temp = {id:2, "name":"Ash","jobTitle":"President","company":"SWE"};
	// 	//will not update unless i do this angular copy, forcing the acutual data to change?
	// 	angular.copy(temp, $scope.testData);
	// 	console.log("In handleSubmit : " + JSON.stringify(temp));
	// }

	$scope.addResult = function(){
		console.log("Results before: " + JSON.stringify($scope.results));

		$scope.results.push({id:2, name:"Ash",jobTitle:"President",company:"SWE"});

		console.log("Results before: " + JSON.stringify($scope.results));

	}
		
	
});