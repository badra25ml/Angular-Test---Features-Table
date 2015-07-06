var express = require('express'), fs = require('fs');
var router = express.Router();
var values = [
{'Feature/Engine': 'FF 1, FF 2, IE 1, IE 2, IE 3, WK 1, WK 2, WK 3, WK 4, iOS 1, iOS'},
{'§exponentiation':'Yes, Yes, No, No, No, No, No, No, No, No, No'},
{'§function.sentc':'No, No, No, No, No, No, No, No, No, No, No'},
{'§Object.observec':'No, No, No, No, No, Yes, Yes, Yes, No, Yes, Yes'},
{'§Array.prototype.includesc': 'No, Yes, Partial, Yes, No, No, Partial, No, Yes, No, No'},
{'§SIMD': 'No, No, No, No, Yes, Yes, No, Yes, Partial, Partial, No'},
{'§trailing commas in function syntax':'No, Yes, No, Yes, No, Partial, Partial, Yes, Partial, Partial, Yes'},
{'§async functions':'No, Yes, Yes, Yes, No, Yes, No, No, Partial, 0/2, Partial'},
{'§typed objectsc':'No, No, Partial, No, No, No, No, No, No, No, No'},
{'§ArrayBuffer.transferc': 'No, No, No, No, Yes, Yes, Yes, Yes, No, No, No'},
{'§class decoratorsc':'No, Yes, No, Partial, No, No, Partial, No, No, No, No'},
{'§async generatorsc': 'No, No, No, No, No, No, No, No, No, No, No'},
{'§object rest propertiesc': 'No, Yes, Yes, No, No, No, No, No, No, No, No'},
{'§object spread propertiesc':' No, Yes, Yes, No, No, No, No, No, No, No, No'}
];
router.get('/data', function(req, res) {
  res.json(values);
});
var app = angular.module('testApp', []);

app.controller("MainCtrl", function($scope, $http) {
  $http.get("/").success(function(data) {
    $scope.values = data.values;
    push(values)
  });

// angular.module('test', []).
//  controller('MainCtrl', ['$scope','show', function ($scope, show) {
//    $scope.callShow = function(view) {
//      show(view);
//    };
//  }]).
// factory('show', ['$window', function(win) {
//    var views = [];
//    return function(values) {
//      push(values);
//        views = [];
//    };
//  }]);
module.exports = router;
