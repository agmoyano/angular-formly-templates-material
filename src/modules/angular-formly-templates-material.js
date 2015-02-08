angular.module('formlyMaterial', ['formly'], function configFormlyLumx(formlyConfigProvider) {
	'use strict';
	var PREFIX = 'md';
	var FIELDS = [];

	var WRAPPERS = [];

	/**
	 * Add Wrapper templateUrls
	 */
	angular.forEach(WRAPPERS, function (wrapper) {
		wrapper.templateUrl = getWrapperTemplateUrl(wrapper.name);
	});

	/**
	 * Cache Templates
	 */
	angular.forEach(FIELDS, function (field) {
		$templateCache.put(getFieldTemplateName(field.name), field.template);
	});

	/**
	 * Prepare Wrappers
	 */
	formlyConfigProvider.setWrapper(WRAPPERS);
	var commonWrappers = [];
	angular.forEach(WRAPPERS, function (wrapper) {
		commonWrappers.push(PREFIX + '-' + wrapper.name);
	});

	/**
	 * Set Field Types with Wrappers
	 */
	angular.forEach(FIELDS, function (field) {
		formlyConfigProvider.setType({
			name: PREFIX + '-' + field.name,
			templateUrl: getFieldTemplateName(field.name),
			wrapper: commonWrappers
		});
	});


	function getFieldTemplateName(name) {
		return 'fields/formly-field-' + PREFIX + '-' + name + '.html';
	}

	function getWrapperTemplateUrl(name) {
		return 'wrappers/' + PREFIX + '-wrapper-' + name + '.html';
	}
});
