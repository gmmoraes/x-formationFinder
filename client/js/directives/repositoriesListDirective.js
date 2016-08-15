//gets the json data from github api and add to file the list of x-formation repositories.
myApp.directive("addrepos", ["resultFactory","$http","$compile", function(resultFactory,$http,$compile) {
	var repositories = [];
	var repoObjects=[];
	return function(scope, element, attrs){
	  resultFactory.parse().then(function(datas,status,headers) {
	  	for(var i =0; i<datas.data.length;i++){
	  		repoObjects.push(
	  			{Name:datas.data[i].name,Language:datas.data[i].language,stargazers:datas.data[i].stargazers_count,forks:datas.data[i].forks, contributors:'', contributorsUrl: datas.data[i].contributors_url}
	  			)
            
            repoObjects.sort(function(a, b){return b.forks-a.forks});

	      }
	      for(var w=0; w<repoObjects.length;w++){
	      	angular.element(document.getElementById('resultWrapper')).append($compile("<div id="+repoObjects[w]['Language']+"  class='"+ repoObjects[w]['Language'] + "'" +  " ><h5><a href='#' data-contriblist="+repoObjects[w]['contributorsUrl']+" class='repoNameA'>" + repoObjects[w]['Name'] + "</a></h5><small>" 
            + repoObjects[w]['Language'] + "</small><small class='b'><span class='glyphicon glyphicon-star'></span>" + repoObjects[w]['stargazers'] 
            + "</small><small><img src='../imgs/octicon.png'></img>" 
            + repoObjects[w]['forks'] + "</small><br><div class='contributionNumber" + w+ "' style='margin-left:0px !important'></div></div>")(scope));
            
	      	$http.get(repoObjects[w]['contributorsUrl'] + "?access_token=13ec017dfa16f8c7bbf9273c09128d27265a121d").success(function(contributions) {
	      		repositories.push(contributions.length);
	      		for(var q =0;q<repositories.length;q++){
	      			repoObjects[q]["contributors"] = repositories[q];
	      			angular.element(document.getElementsByClassName('contributionNumber' + q)).html(repositories[q]);
	      			repoObjects.sort(function(a, b){
	      				if(a.forks == b.forks){
	      					return b.contributors-a.contributors
	      					
	      				}});
	      		}
	      	});
	      	
	      }});
	      repoObjects = [];
	      repositories=[];
	};
}]);	
	


//gives contributor list
myApp.directive("contriblist", ["$http","$compile",'modalFactory', function($http,$compile, modalFactory) {
	return function(scope, element, attrs){
		element.bind("click", function(){
			scope.modalFactory = modalFactory;
			modalFactory.setTitle('User list ');
			var a = attrs.contriblist;
			var promise = $http.get(a); 
			promise.then(function(contributors){
			    console.log(contributors);
			    for(var i=0;i<contributors.data.length;i++){
			    	angular.element(document.getElementById('contributors')).append($compile("<div class='row'>"
			    	+"<div class='col-sm-1'><img src='" + contributors.data[i].avatar_url + "' class='avatar' id='avatar" + i + "'></img></div>"
			    	+"<div class='col-sm-3'><h4><a href='#' data-profiles="+contributors.data[i].url+">"+contributors.data[i].login+ " " + "</a></h4>" 
			    	+"<small>Contributions: " +contributors.data[i].contributions + " " + "</small>"
			    	+"</div></div>")(scope));
			    	

			    }

			    document.getElementById('resultWrapper').innerHTML="";
			     
			 });
		});
	};
}]);


myApp.directive("profiles", ["$http","$compile", 'modalFactory', function($http,$compile,modalFactory) {
	return function(scope, element, attrs){
		element.bind("click", function(){
			scope.modalFactory = modalFactory;
			modalFactory.setTitle('User');
			var contributorAttrs = attrs.profiles;
			var promise = $http.get(contributorAttrs);
			
			promise.then(function(profile){
				console.log(profile);
				console.log(profile.length);
			    angular.element(document.getElementById('contributorProfile')).append($compile("<div class='row'>"
			    +"<div class='col-sm-1'><img src='" + profile.data.avatar_url + "' class='avatarUser'></img></div>"
			    +"<div class='col-sm-5'><h4><a>"+ profile.data.name+ " " + "</a><small>"+ profile.data.login + "</small></h4>" 
			    +"<small>Public Gists: " + profile.data.public_gists + " " + "</small>"
			    +"<small class='publicGists'>Public Repos: " + profile.data.public_repos + "</small></div></div>")(scope));
			    
			    $http.get( profile.data.repos_url + "?access_token=13ec017dfa16f8c7bbf9273c09128d27265a121d").success(function(reposurls) {
			    	angular.element(document.getElementById('tableProfile')).append($compile("<thead><tr><th>Repositories</th></tr></thead><tbody id='reposTbody'></tbody>")(scope));
			    	for(var i =0;i<reposurls.length;i++){
			    		angular.element(document.getElementById('reposTbody')).append($compile("<tr><td>" + reposurls[i].name +"</td></tr>")(scope));
			    	}
			    	
			    });
			    
			    document.getElementById('contributors').innerHTML="";
			     
			 });
		});
	};
}]);



 
 
 