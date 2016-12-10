(function(){
	'use strict';

	angular.module("LunchCheck", [])

	.controller("LunchCheckController", LunchCheckController);

	LunchCheckController.$inject = ['$scope'];

	function LunchCheckController($scope){
		
		$scope.items = "";
		$scope.msg = "";
		$scope.colorPicker = {"color" : ""} 
		// acording to documentation, the value of the ng-style directive MUST be an object or an expression returning an object

		$scope.Message = function(){
			
			var x = countItems($scope.items);
			$scope.colorPicker.color = "green";
			if(x == 0) {
				$scope.msg = "Please enter data first!";
				$scope.colorPicker.color = "red";
			}
			else if(x > 0 && x <= 3){
				$scope.msg = "Enjoy!";
			}
			else {
				$scope.msg = "Too much!";
			}
		};


		function countItems(str){
		var x = str.split(","); 

		// When invoked from an empty string, the method split will return an array with the void string as its unique member. 
		// The length of the returned array is never zero!
		// Try console.log(x) on an empty string.
		
		var y = 0;
		
		for(var i = 0; i < x.length; i++){
			if(x[i] == "" || x[i].trim() == "") y++;
		}

		return (x.length - y);
		};
	};
})();
