var nestedControllerApp = angular.module("nestedControllerApp",[]);
nestedControllerApp.controller("nestedCtrl1",Ctrl1);
nestedControllerApp.controller("nestedCtrl2",Ctrl2);
nestedControllerApp.controller("nestedCtrl3",Ctrl3);
nestedControllerApp.controller("nestedCtrl4",Ctrl4);

function Ctrl3($scope){
  $scope.testCode = "From Ctrl1";
}
function Ctrl4($scope){
  $scope.testCode = "From Ctrl2";

}

//controllers for controller as syntax. scope is available in the this
function Ctrl1(){
  this.testCode = "From Ctrl1";
}
function Ctrl2(){
  this.testCode = "From Ctrl2";

}
