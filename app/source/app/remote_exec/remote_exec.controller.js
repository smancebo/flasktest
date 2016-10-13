(function() {
    'use strict';
    var app = angular.module('flaskApp');
    app.controller('remoteExecController', remoteExecController);

    function remoteExecController($scope, $uibModal, machineService) {
        /*jshint validthis:true */
        var $ctrl = this;

        function reloadMachines(){
          machineService.getMachinelist().then(function(response){
            $ctrl.machineList = response.data;
          });
        }

        reloadMachines();

        $ctrl.openAddMachine = function() {

          function modalController($uibModalInstance, info) {
            var $modalCtrl = this;
            if(info !== undefined){
              $modalCtrl.info = info;
              $modalCtrl.edit = true;
            }else {
              $modalCtrl.info = {};
              $modalCtrl.edit = false;
            }

            $modalCtrl.addMachine = function(){
              machineService.addMachine($modalCtrl.info).then(function(){
                machineService.getMachinelist().then(function(response){
                  $ctrl.machineList = [];
                  $ctrl.machineList = response.data;
                  $uibModalInstance.dismiss('cancel');
                });
              });
            };

            $modalCtrl.cancel = function(){
              $uibModalInstance.dismiss('cancel');
            };
          }
          modalController.$inject = ['$uibModalInstance', 'info'];

            var instance = $uibModal.open({
                animation: true,
                templateUrl: 'remote_exec/addmachine.html',
                controller: modalController,
                controllerAs: '$modalCtrl',
                resolve: {
                  info: function(){
                    return $ctrl.info;
                  }
                }
            });

            instance.closed.then(function(){
              $ctrl.info = undefined;
            });
        };

        $ctrl.editMachine = function(machine){
          machineService.getMachine(machine._id).then(function(response){
            $ctrl.info = response.data;
            $ctrl.edit = true;
            $ctrl.openAddMachine();
          });
        };

        $ctrl.deleteMachine = function(machine){
          machineService.deleteMachine(machine._id).then(function(response){
            console.log(response);
            reloadMachines();
          });
        };



    }
    remoteExecController.$inject = ['$scope', '$uibModal', 'machineService'];

})();
