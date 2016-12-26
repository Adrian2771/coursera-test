(function(){
	'use strict';
	angular.module('LunchCheck',[])
	.controller('LunchCheckController', LunchCheckController);
	
	LunchCheckController.$inject = ['$scope'];
	
	function LunchCheckController($scope){
			$scope.message="";
			$scope.validate="";
			$scope.btnValidate="";
			$scope.textValidate="";
			$scope.lunch="";
		
		$scope.CheckIfTooMuch = function(){

            var length=calculateFoodAmount($scope.lunch);
			if(length ===0){
				$scope.message = "Please enter data first.";
				$scope.validate ="has-error";
				$scope.btnValidate="btn-danger";
				$scope.textValidate="text-danger";

			}
			else if (length>0 && length <= 3) {
				$scope.message ="Enjoy";
				$scope.validate ="has-success";
				$scope.btnValidate="btn-success";
				$scope.textValidate="text-success";
			}else if (length >3) {
				$scope.message = "Too Much";
				$scope.validate ="has-success";
				$scope.btnValidate="btn-success";
				$scope.textValidate="text-success";


			}
		};

		function calculateFoodAmount(string) {
			var length = string.split(',').length;
			var str = string.split(',');
			var regex = /\s{1,}/; // the fix: var regex = /^\s{1,}$/;
			 for (var i=0; i<length; i++){
			 	if (str[i]=="" || regex.test(str[i])){
			 		length -=1;
			 	}}
			console.log(length);
			return length;
		}

	}
})();