
var app= angular.module('flaskApp');

app.factory('machineService', machineService);

function machineService($config, $http){

  var apiUrl = $config.api;

  return {
    addMachine: addMachine,
    getMachinelist : getMachinelist
  };

  function addMachine(info, modalInstance){
    return $http.post(apiUrl + "/machine/add", info);
  }

  function getMachinelist(){
    return $http.get(apiUrl + "/machine/list");
  }
}
machineService.$inject = ['$config', '$http'];
