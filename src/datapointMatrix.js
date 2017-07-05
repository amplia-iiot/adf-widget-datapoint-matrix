'use strict';

angular.module('adf.widget.datapointMatrix', ['adf.provider'])
    .config(function(dashboardProvider) {
        dashboardProvider
            .widget('datapointMatrix', {
                title: 'Show datapoints as matrix effect',
                description: 'Show datapoints as matrix effect',
                templateUrl: require('./view.html'),
                edit: {
                    templateUrl: require('./edit.html')
                }
            });
    });