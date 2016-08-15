myApp.controller('resultCtrl', ['$scope' ,'$rootScope', '$http', '$location','modalFactory', function($scope,$rootScope,$http, $location,modalFactory){

    $scope.modalFactory = modalFactory;

}]);