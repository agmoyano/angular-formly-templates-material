(function () {
  'use strict';

  angular.module('md.formFields.input', [])
    .service('inputFormFields', inputFormFields)
    .config(stateRoutes);

  function inputFormFields() {
    this.contents = {
      title: 'Inputs',
      subhead: '',
      description: '',
      markdownFile: 'app/docs/md-input.md'
    };


    this.fields = function () {
      return [{
        key: 'name',
        type: 'md-input',
        templateOptions: {
          label: 'Name',
          type: 'text'
        }
      }, {
        key: 'email',
        type: 'md-input',
        templateOptions: {
          label: 'Email',
          type: 'email'
        }
      }, {
        key: 'textArea',
        type: 'md-textarea',
        templateOptions: {
          label: 'Your life story here... <textarea>'
        }
      }];
    };
  }

  function stateRoutes($stateProvider) {
    $stateProvider
      .state('input', {
        url: '/input',
        views: {
          'form@': {
            templateUrl: 'app/form/form.html',
            controller: 'FormCtrl as vm',
            resolve: {
              formFields: function (inputFormFields) {
                return inputFormFields.fields;
              },
              contents: function (inputFormFields) {
                return inputFormFields.contents;
              }
            }
          }
        }
      });
  }

}());
