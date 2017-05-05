# Angular 1

-----
### Why we need Client side frame works
1. HTML - static
2. javascript- dynamic
3. **DOM** manipulation in *javascript* is done by calling **DOM API** to access the **DOM** nodes that can be programmatically modified
4. Messy codes,Harder to maintain , Harder to test, no separation of concerns

### Client side MVC frameworks
HTML(View) -- DATA(model)---LOGIC (controller)

### Angular JS
1. HTML Enhanced for webapps
2. HTMLis great for declaring static documents. It falters when we try to use it for dynamic views in webapplications.
3. AngularJS helps you extend HTML vocabulary for your application.The resulting environment is extraordinarily experssive,readable and quick to develop.
4. In JS we
  1. we find element
  2. run LOGIC
  3. update element
5. In AngularJS
  1. Declare element type
  2. Define LOGIC
  3. Use Element type

6. Declarative program
7. Custom elements  :: Directives and components

### How angularjs works

1. Add the *angular.js* script to html
2. create custom Directives
3. Use those elemets in the HTML


### ng-app
1. way to declare **angular app** is add directive *ng-app* to HTML node or any other node. That node becomes the root for *angular* application
2. Auto bootstrap an angularjs application
3. Designate theroot element of the application4.
4. Multiple apllications per page ok( need manual bootstrap)


### ng-if

1. selectively remove or recreate a portion of DOM tree based on an expressionlements
2.*ng-if="true"* element is added.
3.*ng-if="false"* element is removed.


### ng-init

1. To initialize variables *ng-init = "hours=12"*
2. Evaluate expressions
3. not much used. can be used in loops


### scope

1. All directives talk to each other using the scope.
2. An angular app has a global scope. Each controller has its own scope.

### ng-bind
1. Allows you to add value of a variable to the mark up
2. *<span ng-bind="userName"></span>* or *<span>{{userName}}</span>* *{{expressions}}*
3. Expressions are evaluated against the scope

### angular.module
1. Global plcae for creating ,retrieving and registering angular modules
2. A module is a collection ofdirectives,controllers and other stuff
3. *var myModule = angular.module('MyModule',[]);*
4. *angular* is a global variable availble with the angularjs
5. name we give while creating module *'MyModule'* should be same in *ng-app='MyModule'*
6. **Registering a controller**
  1.Module is a collection of things like controllers
  2.A controller has to be registered with a module
  3.
    ~~~~function MainFn(){}
    var myModule = angular.module('MyModule',[]);  
    myModule.controller=("MainCtrl",MainFn);
    ~~~~
    4. controller first argument is *controller name* and the second argument is the *function name*

###Dependency injection and scope

1.Dependency injection is a way in which you can have the things that you need rather than you manually looking it up.
2.in the method argument use *$scope* . Angular inject the *$scope* to the function
3. We can use the *$scope* object to fetch values and add values


###ng-click
1.
~~~~ <button ng-click="update()"></button>
~~~~

2.register the function inside the controller .
~~~~ $scope.update = function(){};
~~~~

###ng-model Two way binding

1.
~~~~ <input type="text" ng-model="userName"></input>
<p>Your name: {{userName}} </p>
~~~~

the value is bound to each key press.  
when scope gets updated the view gets updated automatically.

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
