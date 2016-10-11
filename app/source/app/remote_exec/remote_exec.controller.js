(function() {
    'use strict';
    var app = angular.module('flaskApp');
    app.controller('remoteExecController', remoteExecController);

    function remoteExecController($scope, $uibModal, machineService) {
        /*jshint validthis:true */
        var $ctrl = this;

        machineService.getMachinelist().then(function(response){
          $ctrl.machineList = response.data;
        });

        $ctrl.openAddMachine = function() {

            function modalController($uibModalInstance) {
              var $ctrl = this;
              $ctrl.edit = false;

              $ctrl.addMachine = function(){
                machineService.addMachine($ctrl.info).then(function(){
                  machineService.getMachinelist().then(function(response){
                    debugger
                    $ctrl.machineList = [];
                    $ctrl.machineList = response.data;
                    $uibModalInstance.dismiss('cancel');
                  });
                });
              };
              $ctrl.cancel = function(){
                $uibModalInstance.dismiss('cancel');
              };

            }
            modalController.$inject = ['$uibModalInstance'];


            $uibModal.open({
                animation: true,
                templateUrl: 'remote_exec/addmachine.html',
                controller: modalController,
                controllerAs: '$ctrl'
            });
        };


    }
    remoteExecController.$inject = ['$scope', '$uibModal', 'machineService'];

})();
