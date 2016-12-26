(function () {
'use strict';

angular.module('LunchCheck', [])
.controller('LunchCheckController', function ($scope) {
    $scope.dishes = ""; 
    $scope.message = ""; 
    $scope.msgColor="black";

    $scope.check = function () {        
        var ndishes = $scope.dishes.trim();
        if(ndishes.length < 1) {
            $scope.message = "Enter data";
            $scope.msgColor="black";
        }
        else {
            ndishes = ndishes.split(',');    
            if(ndishes.length <= 3) {
                $scope.message = "Enjoy!";
                $scope.msgColor="green";
            }            
            else if(ndishes.length > 3) {
                $scope.message = "Too much!";
                $scope.msgColor = "red";
            }
        }  

		console.log(ndishes.length);
    };
});


})();