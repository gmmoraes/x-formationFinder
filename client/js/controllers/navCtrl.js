myApp.controller('navCtrl', ['$scope', '$location', function($scope,$location){
    
    $scope.navStyle =false;
    $scope.toogle = '';
    $scope.respBtn = true;

    
    $scope.isActive = function(destination){
        return destination === $location.path();
    }
    
    $scope.clean = function(){
        var resultWrapper = document.getElementById('resultWrapper').innerHTML="";
        var myNode = document.getElementById("foo");
        while (resultWrapper.firstChild) {
            resultWrapper.removeChild(resultWrapper.firstChild);
            
        }
    }
    


    

    

   
}]);