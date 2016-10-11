(function() {

    function configFn($stateProvider, $urlRouterProvider) {
        $urlRouterProvider.otherwise('/');
        $stateProvider
        .state('home',{
          url:'/',
          templateUrl:'remote_exec/remote_exec.html',
          controller:'remoteExecController',
          controllerAs:'$ctrl'
        });
    }
    configFn.$inject = ['$stateProvider','$urlRouterProvider'];


    var app = angular.module('flaskApp', ['ui.router', 'templates', 'ui.bootstrap']);
    app.config(configFn);
    app.constant('$config', {
      api : "http://10.172.0.167:5000"
    });

})();
