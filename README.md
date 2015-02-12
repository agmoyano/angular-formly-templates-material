angular-formly-templates-material
=============================

Angular-Material Templates for Angular-Formly. Modern & flexible forms configured easily in a JSON object.

# Currently Under Progress

# Setup
## Dependencies

1. Angular (@1.3+)
2. [Angular-Formly](https://github.com/formly-js/angular-formly "Angular-Formly") (@3.0+)
3. [Angular-Material](https://material.angularjs.org/#/ "Angular-Material") (@0.6+)


# Update
This project is currently no longer under progress. 

Angular-Material does not allow applying dynamic attribute changes necessary for `angular-formly`.  This may be due to Angular-Material directives being parsed, as applying `ng-required` results in the form directive receiving an added `ngrequired` (no `-`), and adding `ng-class` has no effect at all. In other words, `angular-formly` cannot be used to change colors or add useful attributes. The issue has been submitted on Angular-Material's github. 
