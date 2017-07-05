webpackJsonp([0],[
/* 0 */
/***/ (function(module, exports) {

module.exports = "<div>\n  <h1>Widget view</h1>\n  <p>Content of {{config.sample}}</p>\n</div>\n";

/***/ }),
/* 1 */
/***/ (function(module, exports) {

module.exports = "<form role=\"form\">\n  <div class=\"form-group\">\n    <label for=\"sample\">Sample</label>\n    <input type=\"text\" class=\"form-control\" id=\"sample\" ng-model=\"config.sample\" placeholder=\"Enter sample\">\n  </div>\n</form>\n";

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(3);
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
                templateUrl: __webpack_require__(0),
                edit: {
                    templateUrl: __webpack_require__(1)
                }
            });
    });

/***/ })
],[2]);