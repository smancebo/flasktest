
var app= angular.module('flaskApp');

app.factory('machineService', machineService);

function machineService($config, $http){

  var apiUrl = $config.api;

  return {
    addMachine: addMachine,
    getMachinelist : getMachinelist,
    getMachine: getMachine,
    deleteMachine: deleteMachine
  };

  function addMachine(info, modalInstance){
    return $http.post(apiUrl + "/machine/add", info);
  }

  function getMachinelist(){
    return $http.get(apiUrl + "/machine/list");
  }

  function getMachine(id){
    return $http.get(apiUrl + "/machine/get/" + id);
  }

  function deleteMachine(id){
    return $http.post(apiUrl + "/machine/delete", {"_id" : id});
  }
}
machineService.$inject = ['$config', '$http'];
