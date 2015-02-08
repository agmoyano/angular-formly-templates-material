angular-formly-templates-material
=============================

Angular-Material Templates for Angular-Formly. Modern & flexible forms configured easily in a JSON object.

# Setup
## Dependencies

1. Angular (@1.3+)
2. [Angular-Formly](https://github.com/formly-js/angular-formly "Angular-Formly") (@3.0+)
3. [Angular-Material](https://material.angularjs.org/#/ "Angular-Material") (@0.6+)
4. [ngMessages](https://docs.angularjs.org/api/ngMessages/directive/ngMessages "ngMessages Docs") (@1.3+)

## Getting Started

1. Install dependencies (for example, with Bower (see Bower above)
2. Add the following dependencies to your Angular module:

```javascript
angular.module('myAppName', [
    'ngMessages',
    'formly',
    'lumx',
    'materialLumx'
  ])
```

## View

   Not much necessary. The form only requires the `formly-form` directive tag. For example:

```html
   <!-- formly-form directive generates templates -->
     <formly-form model="formData" fields="formFields" options="formOptions"
                  ng-submit="submit(form.$valid)" name="form">
       <!-- end of formly-form contents -->
       <br>
       <button class="btn btn--m btn--blue btn--raised" lx-ripple type="submit">Submit</button>
     </formly-form>
```

## Controller

Add your formData & formFields onto a controller.

```javascript
angular.module('myAppName').controller('FormCtrl', FormCtrl);
function FormCtrl ($scope) {
  $scope.formData = {};  // the data object
  $scope.formOptions = {}; // optional form parameters
  $scope.formFields = [{ // an array holding all form fields
    'key': 'email',    // ng-model name, saved in formData
    'type': 'lx-text', // field
    'templateOptions: {  // in this case: 'lx-text' options
      //
    }
  }];
}
```

# Components

## Fields

Basic form elements.

-

## Wrappers (coming soon)

Wrap around the form field to add additional functionality. See the [Angular-formly docs on wrappers](https://github.com/formly-js/angular-formly#wrapper-stringarray-of-strings "Wrappers").