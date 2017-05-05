var app = angular.module("calcApp",[]);
app.controller("CalcCtrl",CalcCtrl);


function CalcCtrl(){
  this.result=0;
  this.updateOpn = function (button){
    this.operation=button;
  }
  this.updateResult = function (){
    var num1= parseFloat(this.input1);
    var num2 = parseFloat(this.input2);

    if(this.operation==="+")
      this.result =num1+num2;
    if(this.operation==="-")
      this.result = num1-num2;
    if(this.operation==="*")
      this.result = num1*num2;
    if(this.operation==="/")
      this.result = num1/num2;



  }



}
