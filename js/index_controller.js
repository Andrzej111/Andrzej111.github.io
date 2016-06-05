angular.module("app").run(function ($rootScope) {
	     $rootScope.title = "Some MtG Decks";     
	});

app.controller("decksController", ['$rootScope','$scope','$http', function($scope,$rootScope,$http){
    var vm = this;
    $scope.got_response=false;
	// $rootScope.title="Some MtG Decks";
    $http.get("decks").success(function(response){
        $scope.got_response=true;
        $scope.decks = response;
    });
    

}]);
