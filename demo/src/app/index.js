(function () {
  'use strict';

  angular.module('demo', [
    /* angular-formly-templates-material dependencies */
    'formly',
    'ngMaterial',
    /* additional */
    'ngAnimate',
    'ngTouch',
    'ngSanitize',
    'ui.router',
    'ngPrettyJson',
    'btford.markdown',
    /* modules */
    'md.formFields'
  ])
    .config(routerSetup);

  function routerSetup($urlRouterProvider) {
    $urlRouterProvider.otherwise('/');
  }

}());

