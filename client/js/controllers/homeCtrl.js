myApp.controller('homeCtrl', ['$scope','$rootScope','$location', function($scope,$rootScope,$location){
    
    $scope.footer = '';
    
    $rootScope.$on('$stateChangeSuccess', 
        function(event, toState, toParams, fromState, fromParams){
            if(window.innerWidth > 1100){
                if ($location.path() == "/top-contributors"){
                    $scope.footer ={
                        "margin-top": "110px"
                    }
                    
                }else if ($location.path() == "/repositories"){
                    $scope.footer = {
                        "margin-top": "500px"
                        
                    }
                    
                }else{ 
                    $scope.footer = {
                        "margin-top": "0px"
                        
                    }
                }
            }else if(window.innerWidth < 400){
                if ($location.path() == "/top-contributors"){
                    $scope.footer ={
                        "margin-top": "40px"
                    }
                    
                }else if ($location.path() == "/repositories"){
                    $scope.footer = {
                        "margin-top": "500px"
                        
                    }
                    
                }else{ 
                    $scope.footer = {
                        "margin-top": "0px"
                        
                    }
                }
            }else if(window.innerWidth < 600){
                if ($location.path() == "/top-contributors"){
                    $scope.footer ={
                        "margin-top": "130px"
                    }
                    
                }else if ($location.path() == "/repositories"){
                    $scope.footer = {
                        "margin-top": "500px"
                        
                    }
                    
                }else{ 
                    $scope.footer = {
                        "margin-top": "0px"
                        
                    }
                }
            }else if(window.innerWidth < 800){
                if ($location.path() == "/top-contributors"){
                    $scope.footer ={
                        "margin-top": "280px"
                    }
                    
                }else if ($location.path() == "/repositories"){
                    $scope.footer = {
                        "margin-top": "600px"
                        
                    }
                    
                }else{ 
                    $scope.footer = {
                        "margin-top": "0px"
                        
                    }
                }
            }else if(window.innerWidth < 800){
                if ($location.path() == "/top-contributors"){
                    $scope.footer ={
                        "margin-top": "320px"
                    }
                    
                }else if ($location.path() == "/repositories"){
                    $scope.footer = {
                        "margin-top": "600px"
                        
                    }
                    
                }else{ 
                    $scope.footer = {
                        "margin-top": "0px"
                        
                    }
                }
            }
        });
        


}]);