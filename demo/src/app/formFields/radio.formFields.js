(function () {
  'use strict';

  angular.module('md.formFields.radio', [])
    .service('radioFormFields', radioFormFields)
    .config(stateRoutes);

  function radioFormFields() {
    this.contents = {
      title: 'Radio Buttons',
      subhead: '',
      description: '',
      markdownFile: 'app/docs/md-radio.md'
    };


    this.fields = function () {
      return [{
        key: 'radio1',
        type: 'md-radio',
        templateOptions: {
          label: 'Choose a number:',
          options: [{
            label: 'One',
            value: 1
          }, {
            label: 'Two',
            value: 2
          }, {
            label: 'Three',
            value: 3
          }]
        }
      }];
    };
  }

  function stateRoutes($stateProvider) {
    $stateProvider
      .state('radio', {
        url: '/radio',
        views: {
          'form@': {
            templateUrl: 'app/form/form.html',
            controller: 'FormCtrl as vm',
            resolve: {
              formFields: function (radioFormFields) {
                return radioFormFields.fields;
              },
              contents: function (radioFormFields) {
                return radioFormFields.contents;
              }
            }
          }
        }
      });
  }

}());
