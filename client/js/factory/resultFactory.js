myApp.factory('resultFactory', function($http, $compile){

    return {
        parse: function() {
            return $http.get("https://api.github.com/orgs/x-formation/repos?access_token=13ec017dfa16f8c7bbf9273c09128d27265a121d");  // This will return a promise
        }
        
    };
  
});
