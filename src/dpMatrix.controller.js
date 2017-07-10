angular.module('adf.widget.datapointMatrix')
    .controller('dpMatrixController', function($scope, $timeout) {
        $scope.config = {
            id: 'canvasId',
            texts: [$scope.config.text],
            fontSize: 12,
            speed: 100
        };
    });