app.controller('mainCtrl', ['$scope', function($scope){
	$scope.name="scripts";
	$scope.options = [
		{ 
			command: "instance_list", 
			id: 1 ,
			parameters:[
				["POP","-p",true],
			]
		}, 
		{ 
			command: "image_list", 
			id: 2 ,
			parameters:[
				["POP","-p",true],
			]
		},
		{
			command: "provision",
			id:3,
			parameters:[
				["POP","-p",true],
				['KEYSTONE','-k',true],
				['INSTANCE_NAME','-i',true],
				['FLAVOR_NAME','-f',true],
				['IMAGE_NAME','-I',true],
				['SUBNET_ID','-g',true],
				['EXTRA','-x',false]
			]
		}
	];
	$scope.createstring=[];
	$scope.selectedOption = $scope.options[1];
	$scope.createcommand = "";
	$scope.$watch('selectedOption', function () {
		$scope.calculate();
	});
	$scope.calculate = function(){
		$scope.parameters = $scope.selectedOption.parameters;
		var watch_group=[];
		_.each($scope.selectedOption.parameters, function(data,index){
			watch_group.push("createstring["+index+"]");
		});
		$scope.$watchGroup(watch_group, function(newValues, oldValues, scope) {
			$scope.createcommand =$scope.selectedOption.command + " "; 
		  	_.each($scope.selectedOption.parameters, function(data,index){
		  		if(typeof(newValues[index])=='undefined' || newValues[index]==''){
		 			if(data[2]){
		 				$scope.createcommand +=data[1]+" "+data[0]+" "; 
		 			}
		  		}else{
		  			$scope.createcommand +=data[1]+" "+newValues[index]+" ";
		  		}
			});
		});
	}
	$scope.calculate();
}]);

