!function(){function e(e,t){t.otherwise("/"),e.state("home",{url:"/",templateUrl:"remote_exec/remote_exec.html",controller:"remoteExecController",controllerAs:"$ctrl"})}e.$inject=["$stateProvider","$urlRouterProvider"];var t=angular.module("flaskApp",["ui.router","templates","ui.bootstrap"]);t.config(e)}(),function(){"use strict";function e(e,t){var o=this;o.openAddMachine=function(){function e(e){var t=this;t.edit=!1,t.addMachine=function(){},t.cancel=function(){e.dismiss("cancel")}}e.$inject=["$uibModalInstance"],t.open({animation:!0,templateUrl:"remote_exec/addmachine.html",controller:e,controllerAs:"$ctrl"})}}var t=angular.module("flaskApp");t.controller("remoteExecController",e),e.$inject=["$scope","$uibModal"]}();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC5qcyIsInJlbW90ZV9leGVjL3JlbW90ZV9leGVjLmNvbnRyb2xsZXIuanMiXSwibmFtZXMiOlsiY29uZmlnRm4iLCIkc3RhdGVQcm92aWRlciIsIiR1cmxSb3V0ZXJQcm92aWRlciIsIm90aGVyd2lzZSIsInN0YXRlIiwidXJsIiwidGVtcGxhdGVVcmwiLCJjb250cm9sbGVyIiwiY29udHJvbGxlckFzIiwiJGluamVjdCIsImFwcCIsImFuZ3VsYXIiLCJtb2R1bGUiLCJjb25maWciLCJyZW1vdGVFeGVjQ29udHJvbGxlciIsIiRzY29wZSIsIiR1aWJNb2RhbCIsIiRjdHJsIiwidGhpcyIsIm9wZW5BZGRNYWNoaW5lIiwibW9kYWxDb250cm9sbGVyIiwiJHVpYk1vZGFsSW5zdGFuY2UiLCJlZGl0IiwiYWRkTWFjaGluZSIsImNhbmNlbCIsImRpc21pc3MiLCJvcGVuIiwiYW5pbWF0aW9uIl0sIm1hcHBpbmdzIjoiQ0FBQSxXQUVBLFFBQUFBLEdBQUFDLEVBQUFDLEdBQ0FBLEVBQUFDLFVBQUEsS0FDQUYsRUFDQUcsTUFBQSxRQUNBQyxJQUFBLElBQ0FDLFlBQUEsK0JBQ0FDLFdBQUEsdUJBQ0FDLGFBQUEsVUFHQVIsRUFBQVMsU0FBQSxpQkFBQSxxQkFHQSxJQUFBQyxHQUFBQyxRQUFBQyxPQUFBLFlBQUEsWUFBQSxZQUFBLGdCQUNBRixHQUFBRyxPQUFBYixNQ2hCQSxXQUNBLFlBSUEsU0FBQWMsR0FBQUMsRUFBQUMsR0FFQSxHQUFBQyxHQUFBQyxJQUVBRCxHQUFBRSxlQUFBLFdBRUEsUUFBQUMsR0FBQUMsR0FDQSxHQUFBSixHQUFBQyxJQUNBRCxHQUFBSyxNQUFBLEVBRUFMLEVBQUFNLFdBQUEsYUFHQU4sRUFBQU8sT0FBQSxXQUNBSCxFQUFBSSxRQUFBLFdBSUFMLEVBQUFYLFNBQUEscUJBR0FPLEVBQUFVLE1BQ0FDLFdBQUEsRUFDQXJCLFlBQUEsOEJBQ0FDLFdBQUFhLEVBQ0FaLGFBQUEsV0E1QkEsR0FBQUUsR0FBQUMsUUFBQUMsT0FBQSxXQUNBRixHQUFBSCxXQUFBLHVCQUFBTyxHQWlDQUEsRUFBQUwsU0FBQSxTQUFBIiwiZmlsZSI6ImFwcC5qcyIsInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbigpIHtcblxuICAgIGZ1bmN0aW9uIGNvbmZpZ0ZuKCRzdGF0ZVByb3ZpZGVyLCAkdXJsUm91dGVyUHJvdmlkZXIpIHtcbiAgICAgICAgJHVybFJvdXRlclByb3ZpZGVyLm90aGVyd2lzZSgnLycpO1xuICAgICAgICAkc3RhdGVQcm92aWRlclxuICAgICAgICAuc3RhdGUoJ2hvbWUnLHtcbiAgICAgICAgICB1cmw6Jy8nLFxuICAgICAgICAgIHRlbXBsYXRlVXJsOidyZW1vdGVfZXhlYy9yZW1vdGVfZXhlYy5odG1sJyxcbiAgICAgICAgICBjb250cm9sbGVyOidyZW1vdGVFeGVjQ29udHJvbGxlcicsXG4gICAgICAgICAgY29udHJvbGxlckFzOickY3RybCdcbiAgICAgICAgfSk7XG4gICAgfVxuICAgIGNvbmZpZ0ZuLiRpbmplY3QgPSBbJyRzdGF0ZVByb3ZpZGVyJywnJHVybFJvdXRlclByb3ZpZGVyJ107XG5cblxuICAgIHZhciBhcHAgPSBhbmd1bGFyLm1vZHVsZSgnZmxhc2tBcHAnLCBbJ3VpLnJvdXRlcicsICd0ZW1wbGF0ZXMnLCAndWkuYm9vdHN0cmFwJ10pO1xuICAgIGFwcC5jb25maWcoY29uZmlnRm4pO1xufSkoKTtcbiIsIihmdW5jdGlvbigpIHtcbiAgICAndXNlIHN0cmljdCc7XG4gICAgdmFyIGFwcCA9IGFuZ3VsYXIubW9kdWxlKCdmbGFza0FwcCcpO1xuICAgIGFwcC5jb250cm9sbGVyKCdyZW1vdGVFeGVjQ29udHJvbGxlcicsIHJlbW90ZUV4ZWNDb250cm9sbGVyKTtcblxuICAgIGZ1bmN0aW9uIHJlbW90ZUV4ZWNDb250cm9sbGVyKCRzY29wZSwgJHVpYk1vZGFsKSB7XG4gICAgICAgIC8qanNoaW50IHZhbGlkdGhpczp0cnVlICovXG4gICAgICAgIHZhciAkY3RybCA9IHRoaXM7XG5cbiAgICAgICAgJGN0cmwub3BlbkFkZE1hY2hpbmUgPSBmdW5jdGlvbigpIHtcblxuICAgICAgICAgICAgZnVuY3Rpb24gbW9kYWxDb250cm9sbGVyKCR1aWJNb2RhbEluc3RhbmNlKSB7XG4gICAgICAgICAgICAgIHZhciAkY3RybCA9IHRoaXM7XG4gICAgICAgICAgICAgICRjdHJsLmVkaXQgPSBmYWxzZTtcblxuICAgICAgICAgICAgICAkY3RybC5hZGRNYWNoaW5lID0gZnVuY3Rpb24oKXtcblxuICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgICAkY3RybC5jYW5jZWwgPSBmdW5jdGlvbigpe1xuICAgICAgICAgICAgICAgICR1aWJNb2RhbEluc3RhbmNlLmRpc21pc3MoJ2NhbmNlbCcpO1xuICAgICAgICAgICAgICB9O1xuXG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBtb2RhbENvbnRyb2xsZXIuJGluamVjdCA9IFsnJHVpYk1vZGFsSW5zdGFuY2UnXTtcblxuXG4gICAgICAgICAgICAkdWliTW9kYWwub3Blbih7XG4gICAgICAgICAgICAgICAgYW5pbWF0aW9uOiB0cnVlLFxuICAgICAgICAgICAgICAgIHRlbXBsYXRlVXJsOiAncmVtb3RlX2V4ZWMvYWRkbWFjaGluZS5odG1sJyxcbiAgICAgICAgICAgICAgICBjb250cm9sbGVyOiBtb2RhbENvbnRyb2xsZXIsXG4gICAgICAgICAgICAgICAgY29udHJvbGxlckFzOiAnJGN0cmwnXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfTtcblxuXG4gICAgfVxuICAgIHJlbW90ZUV4ZWNDb250cm9sbGVyLiRpbmplY3QgPSBbJyRzY29wZScsICckdWliTW9kYWwnXTtcblxufSkoKTtcbiJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==
