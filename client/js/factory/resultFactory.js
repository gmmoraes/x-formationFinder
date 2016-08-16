myApp.factory('resultFactory', function($http, $compile){

    return {
        parse: function() {
            return $http.get("https://api.github.com/orgs/x-formation/repos");  // This will return a promise
        }
        
    };
  
});
