(function () {
  'use strict';

  angular.module('demo')
    .controller('NavCtrl', NavCtrl);

  function NavCtrl() {
    var vm = this;
    vm.sidebar = null;
    vm.navBarLinks = [{
      title: 'Angular-Formly',
      link: 'https://github.com/formly-js/angular-formly'
    }, {
      title: 'Angular-Material',
      link: 'https://material.angularjs.org'
    }, {
      title: 'GitHub',
      link: 'https://github.com/formly-js/angular-formly-templates-material'
    }];

    vm.sidebarLinks = [{
      state: 'input',
      title: 'Inputs'
    }, {
      state: 'checkbox',
      title: 'Checkboxes'
    }, {
      state: 'radio',
      title: 'Radio buttons'
    }, {
      state: 'switch',
      title: 'Switches'
    }, {
      state: 'slider',
      title: 'Sliders'
    }];


  }

}());
