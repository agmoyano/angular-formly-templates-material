(function () {
  'use strict';

  angular.module('md.formFields.switch', [])
    .service('switchFormFields', switchFormFields)
    .config(stateRoutes);

  function switchFormFields() {
    this.contents = {
      title: 'Switches',
      subhead: '',
      description: '',
      markdownFile: 'app/docs/md-switch.md'
    };


    this.fields = function () {
      return [{
        key: 'switch1',
        type: 'md-switch',
        templateOptions: {
          label: 'Switch (md-primary)',
          className: 'md-primary'
        }
      }, {
        key: 'switch2',
        type: 'md-switch',
        templateOptions: {
          label: 'Switch (md-warn)',
          className: 'md-warn'
        }
      }, {
        key: 'disabledSwitch',
        type: 'md-switch',
        templateOptions: {
          label: 'Switch (disabled)',
          disabled: true
        }
      }];
    };
  }

  function stateRoutes($stateProvider) {
    $stateProvider
      .state('switch', {
        url: '/switch',
        views: {
          'form@': {
            templateUrl: 'app/form/form.html',
            controller: 'FormCtrl as vm',
            resolve: {
              formFields: function (switchFormFields) {
                return switchFormFields.fields;
              },
              contents: function (switchFormFields) {
                return switchFormFields.contents;
              }
            }
          }
        }
      });
  }

}());
