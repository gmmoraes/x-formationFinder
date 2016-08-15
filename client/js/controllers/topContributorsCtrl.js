myApp.controller('topContributorsCtrl', ["$scope", function($scope) {
    
$(document).ready(function () {

    (function ($) {

        $('#filter').keyup(function () {

            var rex = new RegExp($(this).val(), 'i');
            $('#topContTbody tr').hide();
            $('#topContTbody tr').filter(function () {
                return rex.test($(this).text());
            }).show();

        })

    }(jQuery));

});

}]);
