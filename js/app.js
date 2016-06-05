var app = angular.module('app', []);

app.controller("singleDeck", ['$scope','$http', function($scope,$http){
    var vm = this;
    vm.cokolwiek=[1,2,3,4,5,6,7];
    vm.expanded=false;
    vm.decklist=[];
    vm.more_text="Show decklist";
    vm.hovered_link="http://gatherer.wizards.com/Handlers/Image.ashx?type=card&name=notexisting";
    for (var i = 0; i<$scope.deck.cards.length;i++) {
    	var set = $scope.deck.cards[i];
        if (!set.category) {
            for (var j = 0; j<set.cards_array.length;j++) {
                for (var k = 0; k<set.cards_array[j].count; k++)
                    vm.decklist.push(set.cards_array[j].name);
            }
        } else if (set.category.search(/^side.*/i)!=0)	// only maindeck
    		for (var j = 0; j<set.cards_array.length;j++) {
    			for (var k = 0; k<set.cards_array[j].count; k++)
    				vm.decklist.push(set.cards_array[j].name);
    		}
    }

    vm.draw_hand = function(number){
    	if (vm.decklist.length<40)
    		alert("Invalid length of deck");
    	else {
    		vm.hand=[];
    		for (var i = 0; i < number; i++ ) {		
    			var r=null;
    			do {
    				r = Math.floor(vm.decklist.length*Math.random());
    				// if ( (vm.hand.indexOf(r)!=-1))
    					// alert(r);
    			} while (vm.hand.indexOf(r)!=-1);
    			vm.hand.push(r);
    			// alert(vm.hand);
    		}
    		vm.name_hand=[];
    		for (var i = 0; i < vm.hand.length; i++)
    			vm.name_hand.push(vm.decklist[vm.hand[i]]);
    	}
    }
    
    vm.image_from_name = function(name){
    	var url = "http://gatherer.wizards.com/Handlers/Image.ashx?type=card&name="+name;
	}

	vm.hovered = function(name){
		// alert(name);
		var url = "http://gatherer.wizards.com/Handlers/Image.ashx?type=card&name="+name;
		vm.hovered_link=url;
		vm.hovered_card='http://gatherer.wizards.com/Pages/Search/Default.aspx?page=1&name='+name;
	}

    vm.more = function(){//image
    	if(vm.expanded){
    		vm.expanded = false;
    		vm.more_text="Show decklist";
    	}
    	else{
    		vm.expanded = true;
    		vm.more_text="Hide decklist";
    	}
    };

}]);


// angular.module('app').controller("SubController", ['$scope', function($scope){
// 	var vm =this;
// 	vm.liczby=[5,1,3,2];
// }]);


