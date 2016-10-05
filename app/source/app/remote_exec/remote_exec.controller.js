(function() {
    'use strict';
    var app = angular.module('flaskApp');
    app.controller('remoteExecController', remoteExecController);

    function remoteExecController($scope, $uibModal) {
        /*jshint validthis:true */
        var $ctrl = this;

        $ctrl.openAddMachine = function() {

            function modalController($uibModalInstance) {
              var $ctrl = this;
              $ctrl.edit = false;

              $ctrl.addMachine = function(){

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
    remoteExecController.$inject = ['$scope', '$uibModal'];

})();
