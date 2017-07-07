angular.module('adf.widget.datapointMatrix')
    .controller('dpMatrixController', function($scope, $timeout) {
        $scope.config = {
            id: 'canvasId',
            text: $scope.config.text,
            fontSize: 12,
            speed: 100
        };
        /*$timeout(function() {
            $scope.config.text = '123456789 ';
        }, 5000);*/
    });