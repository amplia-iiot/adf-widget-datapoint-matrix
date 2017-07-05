'use strict';

angular.module('adf.widget.datapointMatrix', ['adf.provider'])
    .config(function(dashboardProvider) {
        dashboardProvider
            .widget('datapointMatrix', {
                title: 'Show datapoints as matrix effect',
                description: 'Show datapoints as matrix effect',
                controller: 'dpMatrixController',
                templateUrl: require('./view.html'),
                category: 'Victor\'s Category',
                reload: true,
                edit: {
                    immediate: true,
                    templateUrl: require('./edit.html')
                }
            });
    });