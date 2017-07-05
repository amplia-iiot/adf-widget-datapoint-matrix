angular.module('adf.widget.datapointMatrix')
    .controller('dpMatrixController', function($scope, $timeout) {
        $scope.config = {
            id: 'canvasId',
            text: "田由甲申甴电甶男甸甹町画甼甽甾甿畀畁畂畃畄畅畆畇畈畉畊畋界畍畎畏畐畑",
            fontSize: 10,
            speed: 100
        };
        $timeout(function() {
            $scope.config.text = '123456789 ';
        }, 5000);
    });