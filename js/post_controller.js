angular.module("app").run(function ($rootScope) {
	     $rootScope.title = "Post your deck";     
});

app.controller("postController", ['$rootScope','$scope','$http', function($scope,$rootScope,$http){
    var vm = this;
    $scope.got_response=false;
    
    vm.submit = function () {
    	// data={"decklist" : vm.decklist};
    	$http.post('post_deck', JSON.stringify(vm.decklist)).success(function(response){
        	$scope.got_response=true;
        	// alert("Otrzymałem");
        	$scope.decks = response;
    	});	
    }
    
    

}]);
