myApp.directive("contributors", ["topContLinksFactory","$http","$compile", function(topContLinksFactory,$http,$compile) {
	var topContributoList=[];
	return function(scope, element, attrs){
	  topContLinksFactory.links().then(function(datas,status,headers) {
	  	console.log(datas.data[0]);
	  	for(var i =0; i<datas.data.length;i++){
	  		topContributoList.push(
	  			{Nickname:datas.data[i].nickname,Team:datas.data[i].team,Contributions:datas.data[i].contributions}
	  			)
            
            topContributoList.sort(function(a, b){return b.Contributions-a.Contributions});

	      }
	      console.log(topContributoList.length);
	      for(var w=0; w<topContributoList.length;w++){
	      	console.log(topContributoList[w]['Contributions']);
	      	angular.element(document.getElementById('topContTbody')).append($compile("<tr><<td>" + topContributoList[w]['Nickname']+ "</td><td>" 
            + topContributoList[w]['Team'] + "</td><td>" + topContributoList[w]['Contributions'] 
            + "</td></tr>")(scope));
            
	      	
	      }
	  	
	  });
	  topContributoList=[];
	};
}]);
