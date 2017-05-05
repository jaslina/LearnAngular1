angular.module("moreDirectivesApp",[])
.controller("MoreDirectives",MoreDirectives);


function MoreDirectives(){
//  this.myList=[1,2,3,4];
this.myList = [
  { 'name':"Foo",'age' :20},
  { 'name':"Foo1",'age' :21},
  { 'name':"Foo2",'age' :22},
  { 'name':"Foo3",'age' :23},
];


  }
