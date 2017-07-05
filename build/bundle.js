webpackJsonp([0],[
/* 0 */
/***/ (function(module, exports) {

module.exports = "<div>\n    <h1>Widget view</h1>\n    <p>Content of {{config.sample}}</p>\n    <ng-matrix config=\"config\"></ng-matrix>\n</div>";

/***/ }),
/* 1 */
/***/ (function(module, exports) {

module.exports = "<form role=\"form\">\n  <div class=\"form-group\">\n    <label for=\"sample\">Sample</label>\n    <input type=\"text\" class=\"form-control\" id=\"sample\" ng-model=\"config.sample\" placeholder=\"Enter sample\">\n  </div>\n</form>\n";

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(3);
__webpack_require__(4);
__webpack_require__(1);
module.exports = __webpack_require__(0);


/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


angular.module('adf.widget.datapointMatrix', ['adf.provider'])
    .config(function(dashboardProvider) {
        dashboardProvider
            .widget('datapointMatrix', {
                title: 'Show datapoints as matrix effect',
                description: 'Show datapoints as matrix effect',
                controller: 'dpMatrixController',
                template: __webpack_require__(0),
                category: 'Victor\'s Category',
                reload: true,
                edit: {
                    immediate: true,
                    template: __webpack_require__(1)
                }
            });
    });

/***/ }),
/* 4 */
/***/ (function(module, exports) {

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

/***/ })
],[2]);