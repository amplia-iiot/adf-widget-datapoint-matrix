'use strict';

angular.module('adf.widget.datapointMatrix', ['adf.provider', 'angular-matrix'])
    .config(function(dashboardProvider) {
        dashboardProvider
            .widget('datapointMatrix', {
                title: 'Show text as matrix effect',
                description: 'Show text as matrix effect',
                controller: 'dpMatrixController',
                template: require('./view.html'),
                category: 'User\'s Category',
                edit: {
                    immediate: true,
                    template: require('./edit.html')
                }
            });
    });