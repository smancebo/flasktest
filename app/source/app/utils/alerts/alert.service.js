
var app = angular.module('flaskApp');

app.factory('$alerts', alertsService);

function alertsService($uibModal){
  return {
    show : showFn,
    confirm: confirmFn
  };

  function showFn(msg, type){

  }

  function confirmFn(msg, type){

  }

  
}

alertsService.$inject = ['$uibModal'];
