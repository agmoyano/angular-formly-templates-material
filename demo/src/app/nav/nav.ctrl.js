(function () {
  'use strict';

  angular.module('demo')
    .controller('NavCtrl', NavCtrl);

  function NavCtrl() {
    var vm = this;
    vm.sidebar = null;
    vm.navBarLinks = [{
      text: 'Angular-Formly',
      link: 'https://github.com/formly-js/angular-formly'
    }, {
      text: 'Angular-Material',
      link: 'https://material.angularjs.org'
    }, {
      text: 'GitHub',
      link: 'https://github.com/formly-js/angular-formly-templates-material'
    }];
  }

}());
