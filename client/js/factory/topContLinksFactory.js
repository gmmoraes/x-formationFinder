myApp.factory('topContLinksFactory', function($http, $compile){

    return {
        links: function() {
            return $http.get("../json/contributors.json");  // This will return a promise
        }
        
    };
  
});