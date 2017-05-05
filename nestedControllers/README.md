#Angular 1

-----

###Nested controllers
1.  Multiple controllers in a single app
2. There is a global scope for each ng-app
3. For each controller there is a private scope
4. controller first search for the value in the local scope. If not present it will look up in the parent scope

###Using controller as syntax
1.Using *this* instead of *$scope* works only with *controller-as* syntax.Without *controller-as* you will need to inject *$scope*
2.Syntax is *ng-controller="ctrl1 as c1"* and in the value part *c1.testCode*

###ng-show and ng-hide
1.if *ng-show* is true shows the part. if *ng-hide* true hides the part. (Not removed from DOM)
2.If use *ng-if* when its false, the element is removed from the dom
3.If we use *ng-show* and when its false, the element is still in the DOM. But it uses a *class="ng-hide"* which is a css class with *display:none* value

###ng-repeat
1.Create a list in controller. for each element in the list the element in the html used with ng-repeat is repeated. If the elements are objects like *json* *ng-repeat* iterates through it and displays based on the html.
2.Adds new elements to the DOM based on the list
3.Each element added to DOM *angular* creates a new scope.  it is performed as *class="ng-scope"*.
4.Unlike a classic for-loop an *ng-repeat* creates multiple copies of HTML elements that all need to exist concurrently at the same time
5.The scope created for *ng-repeat* has some other variables like
  a.*$index*
  b.*$first*
  c.*$middle*
  d.*$last*
  e.*$even*
  f.*$odd*

  ###Resusasble Modules
  1. *var myHelloModule = angular.module("myHelloModule",[]);*  --> Register a module like this with functionalities
  2. Import the js file
  3. Add this module to the app.js app module as below
      *var app = angular.module("modulesApp",["myHelloModule"]);*
      [] in the module declaration can be used to import list of Resusasble modules.
