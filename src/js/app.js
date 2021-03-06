import angular from 'angular';
import moment from 'moment';
// Import our app config files
import constants from './config/app.constants';
import appConfig from './config/app.config';
import appRun from './config/app.run';
import 'angular-ui-router';
import 'angular-ui-bootstrap';
import 'angular-ui-grid';
import 'ui-grid-auto-fit-columns';
import 'angular-google-chart';
import _ from 'lodash';
import 'angular-toastr';
window._ = _;
window.moment = moment;
// Import our templates file (generated by Gulp)
import './config/app.templates';
// Import our app functionaity
import './components';
import './services';

// Create and bootstrap application
const requires = [
    'ui.router',
    'ui.bootstrap',
    'toastr',
    'ui.grid',
    'ui.grid.edit',
    'ui.grid.exporter',
    'ui.grid.autoFitColumns',
    'ui.grid.pagination',
    'ui.grid.resizeColumns',
    'ui.grid.grouping',
    'googlechart',
    'templates',
    'app.components',
    'app.services'
];


// Mount on window for testing
window.app = angular.module('app', requires);

angular.module('app').constant('AppConstants', constants);

angular.module('app').config(appConfig);

angular.module('app').run(appRun);

angular.bootstrap(document, ['app'], {
    strictDi: true
});