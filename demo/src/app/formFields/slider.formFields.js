(function () {
  'use strict';

  angular.module('md.formFields.slider', [])
    .service('sliderFormFields', sliderFormFields)
    .config(stateRoutes);

  function sliderFormFields() {
    this.contents = {
      title: 'Sliders',
      subhead: '',
      description: '',
      markdownFile: 'app/docs/md-slider.md'
    };


    this.fields = function () {
      return [{
        key: 'slider1',
        type: 'md-slider',
        templateOptions: {
          label: 'How much?',
          min: 10,
          max: 100,
          color: 'red'
        }
      }, {
        key: 'slider2',
        type: 'md-slider',
        templateOptions: {
          label: 'How much?',
          min: 100,
          max: 1000,
          step: 100,
          color: 'blue'
        }
      }];
    };
  }

  function stateRoutes($stateProvider) {
    $stateProvider
      .state('slider', {
        url: '/slider',
        views: {
          'form@': {
            templateUrl: 'app/form/form.html',
            controller: 'FormCtrl as vm',
            resolve: {
              formFields: function (sliderFormFields) {
                return sliderFormFields.fields;
              },
              contents: function (sliderFormFields) {
                return sliderFormFields.contents;
              }
            }
          }
        }
      });
  }

}());
