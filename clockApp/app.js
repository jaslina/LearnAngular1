var app = angular.module("clockApp",[]);
app.controller("TimeCtrl",TimeCtrl);


function TimeCtrl($scope){
  $scope.timeNow = new Date().toTimeString();
  $scope.updateTime = function (){
    var currentDate = new Date();
    $scope.timeNow = currentDate.toTimeString();
  }

  

}
