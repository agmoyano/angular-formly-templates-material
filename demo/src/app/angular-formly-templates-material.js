(function () {
  'use strict';
  var USING_TEMPLATES = true;
  var MODULE_NAME = "formlyMaterial";
  var PREFIX = "md";
  var FIELDS = [{
    "name": "checkbox",
    "template": "<md-checkbox ng-model=\"model[options.key]\" aria-label=\"{{::options.label}}\">{{::options.label}}</md-checkbox>"
  }, {
    "name": "input",
    "template": "<md-input-container><label>{{::options.templateOptions.label}}</label><input ng-model=\"model[options.key]\" type=\"{{::options.templateOptions.type}}\"></md-input-container>"
  }, {
    "name": "radio",
    "template": "<md-radio-group ng-model=\"model[options.key]\"><md-radio-button ng-repeat=\"(key, option) in options.templateOptions.options track by $index\" ng-value=\"{{::option.value}}\" aria-label=\"{{ ::option.label }}\">{{::option.label}}</md-radio-button></md-radio-group>"
  }, {
    "name": "slider",
    "template": "<div><md-slider ng-model=\"model[options.key]\" min=\"{{::options.templateOptions.min}}\" max=\"{{::options.templateOptions.max}}\" step=\"{{::options.templateOptions.step}}\" aria-label=\"{{::options.templateOptions.label}}\" id=\"{{(::options.templateOptions.color || \'blue\') + \'-slider\'\"></md-slider></div>"
  }, {
    "name": "switch",
    "template": "<md-switch ng-model=\"model[options.key]\" aria-label=\"{{::options.label}}\" ng-class=\"::options.templateOptions.className || \'\'\">{{::options.label}}</md-switch>"
  }, {
    "name": "textarea",
    "template": "<md-input-container><label>{{::options.label}}</label><textarea ng-model=\"model[options.key]\"></textarea></md-input-container>"
  }];
  var WRAPPERS;

  function _wrapperTemplateUrl(name) {
    return 'wrappers/formly-wrappers-' + PREFIX + '-' + name + '.html';
  }

  function _fieldTemplateUrl(name) {
    return 'fields/formly-fields-' + PREFIX + '-' + name + '.html';
  }

  angular.module(MODULE_NAME, ['formly']).config(setCustomTemplates).run(cacheLumXTemplates);
  /*@ngInject*/
  function cacheLumXTemplates($templateCache) {
    if (USING_TEMPLATES) {
      angular.forEach(FIELDS, function (field) {
        $templateCache.put(_fieldTemplateUrl(field.name), field.template);
      });
      angular.forEach(WRAPPERS, function (wrapper) {
        $templateCache.put(_wrapperTemplateUrl(wrapper.name), wrapper.template);
      });
    }
  }

  /*@ngInject*/
  function setCustomTemplates(formlyConfigProvider) {
    if (USING_TEMPLATES) {
      var wrapperList = [];
      angular.forEach(WRAPPERS, function (wrapper) {
        wrapperList.push(PREFIX + '-' + wrapper + '-' + wrapper.name);
      });
      angular.forEach(WRAPPERS, function (wrapper) {
        formlyConfigProvider.setWrapper({
          name: PREFIX + '-' + wrapper + '-' + wrapper.name,
          templateUrl: _wrapperTemplateUrl(wrapper.name)
        });
      });
      angular.forEach(FIELDS, function (field) {
        formlyConfigProvider.setType({name: PREFIX + '-' + field.name, templateUrl: _fieldTemplateUrl(field.name)});
      });
    }
  }
}());
