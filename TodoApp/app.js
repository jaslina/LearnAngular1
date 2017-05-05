var app = angular.module("todoApp",[]);
app.controller("TodoCtrl",TodoCtrl);


function TodoCtrl(){
  this.todoList = [
    "Learn Angular",
    "Try out Examples",
    "Learn more Angular"
  ];
  this.editClicked = false;
  this.addTodoList = function(){
    this.todoList.push(this.todoText);
  }
  this.editTodoList=function(){
    this.editClicked = !this.editClicked;
  }
  this.deleteFromTodo = function(index){
    this.todoList.splice(index,1);
  }

  }
