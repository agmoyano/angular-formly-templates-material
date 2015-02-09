(function () {
  'use strict';

  angular.module('md.formFields.checkbox', [])
    .service('checkboxFormFields', checkboxFormFields)
    .config(stateRoutes);

  function checkboxFormFields() {
    this.contents = {
      title: 'Checkboxes',
      subhead: '',
      description: '',
      markdownFile: 'app/docs/md-checkbox.md'
    };


    this.fields = function () {
      return [{
        key: 'boxDefault',
        type: 'md-checkbox',
        templateOptions: {
          label: 'Checkbox (default)'
        }
      }, {
        key: 'boxPrimary',
        type: 'md-checkbox',
        templateOptions: {
          label: 'Checkbox (md-primary)'
        }
      }, {
        key: 'boxWarn',
        type: 'md-checkbox',
        templateOptions: {
          label: 'Checkbox (md-warn)',
          className: 'md-warn'
        }
      }];
    };
  }

  function stateRoutes($stateProvider) {
    $stateProvider
      .state('checkbox', {
        url: '/checkbox',
        views: {
          'form@': {
            templateUrl: 'app/form/form.html',
            controller: 'FormCtrl as vm',
            resolve: {
              formFields: function (checkboxFormFields) {
                return checkboxFormFields.fields;
              },
              contents: function (checkboxFormFields) {
                return checkboxFormFields.contents;
              }
            }
          }
        }
      });
  }

}());
