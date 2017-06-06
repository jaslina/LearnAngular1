### Angular 1

-----
### Why we need Client side frame works
1. HTML - static
2. javascript- dynamic
3. **DOM** manipulation in *javascript* is done by calling **DOM API** to access the **DOM** nodes that can be programmatically modified
4. Messy codes,Harder to maintain , Harder to test, no separation of concerns

### Client side MV* frameworks
HTML(View) -- DATA(model)---LOGIC (controller)
watchers and digest loop connect the view and the model

### Angular JS
1. HTML Enhanced for webapps
2. HTMLis great for declaring static documents. It falters when we try to use it for dynamic views in webapplications.
3. AngularJS helps you extend HTML vocabulary for your application.The resulting environment is extraordinarily experssive,readable and quick to develop.
4. In JS we
   * we find element
   * run LOGIC
   * update element
5. In AngularJS
   * Declare element type
   * Define LOGIC
   * Use Element type

6. Declarative program
7. Custom elements  :: Directives and components

### How angularjs works

1. Add the *angular.js* script to html
2. create custom Directives
3. Use those elemets in the HTML


### ng-app
1. way to declare **angular app** is add directive *ng-app* to HTML node or any other node. That node becomes the root for *angular* application
2. Auto bootstrap an angularjs application
3. Designate the root element of the application.
4. Multiple apllications per page ok( need manual bootstrap)


### Data binding
1. Data-binding is an automatic way of updating the view whenever the model changes, as well as updating the model whenever the view changes.


### ng-if

1. selectively remove or recreate a portion of DOM tree based on an expressionlements
2. *ng-if="true"* element is added.
3. *ng-if="false"* element is removed.

### ng-cloak
1. when the html loads the angular interpolations will be there *{{ }}*. Angular resolves it and places the value there. So just fora moment the screen may be loaded with {{}}. So *ng-cloak* helps to hide it until the angular  work is done

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
2. A module is a collection of directives,controllers and other stuff
3. *var myModule = angular.module('MyModule',[]);*
4. *angular* is a global variable availble with the angularjs
5. name we give while creating module *'MyModule'* should be same in *ng-app='MyModule'*

### Controller
1. Controllers are the behavior behind the DOM elements.
2. AngularJS lets you express the behavior in a clean readable form without the usual boilerplate of updating the DOM, registering callbacks or watching model changes.
3.  AngularJS models are plain old JavaScript objects. This makes your code easy to test, maintain, reuse, and again free from boilerplate.
4.  **Registering a controller**
    * Module is a collection of things like controllers
    * A controller has to be registered with a module
    *
    ``` function MainFn(){}
    var myModule = angular.module('MyModule',[]);  
    myModule.controller=("MainCtrl",MainFn);
    ```
    * controller first argument is *controller name* and the second argument is the *function name*

### Dependency injection and scope

1. Dependency injection is a way in which you can have the things that you need rather than you manually looking it up.
2. in the method argument use *$scope* . Angular inject the *$scope* to the function
3. We can use the *$scope* object to fetch values and add values
4. **Dependency Injection** : *Giving a function an object* rather than creating an object inside a function pass it to the function.
5. Js arrays can include functions as elements

### Interpolation
1. Creating a string by combining strings and placeholders. ie 'my name is :'+ name


### ng-click
1.
` <button ng-click="update()"></button>`

2. register the function inside the controller .

` $scope.update = function(){};`

### ng-model Two way binding

1.
```<input type="text" ng-model="userName"></input>
<p>Your name: {{userName}} </p>
```

the value is bound to each key press.  
when scope gets updated the view gets updated automatically.

###Nested controllers
1.  Multiple controllers in a single app
2. There is a global scope for each ng-app
3. For each controller there is a private scope
4. controller first search for the value in the local scope. If not present it will look up in the parent scope

### Using controller as syntax
1.Using *this* instead of *$scope* works only with *controller-as* syntax.Without *controller-as* you will need to inject *$scope*
2.Syntax is *ng-controller="ctrl1 as c1"* and in the value part *c1.testCode*

### ng-show and ng-hide
1. if *ng-show* is true shows the part. if *ng-hide* true hides the part. (Not removed from DOM)
2. If use *ng-if* when its false, the element is removed from the dom
3. If we use *ng-show* and when its false, the element is still in the DOM. But it uses a *class="ng-hide"* which is a css class with *display:none* value

### ng-repeat
1. Create a list in controller. for each element in the list the element in the html used with ng-repeat is repeated. If the elements are objects like *json* *ng-repeat* iterates through it and displays based on the html.
2. Adds new elements to the DOM based on the list
3. Each element added to DOM *angular* creates a new scope.  it is performed as *class="ng-scope"*.
4. Unlike a classic for-loop an *ng-repeat* creates multiple copies of HTML elements that all need to exist concurrently at the same time
5. The scope created for *ng-repeat* has some other variables like
  a.*$index*
  b.*$first*
  c.*$middle*
  d.*$last*
  e.*$even*
  f.*$odd*

### Resusasble Modules
  1. *var myHelloModule = angular.module("myHelloModule",[]);*  --> Register a module like this with functionalities
  2. Import the js file
  3. Add this module to the app.js app module as below
      *var app = angular.module("modulesApp",["myHelloModule"]);*
      [] in the module declaration can be used to import list of Resusasble modules.


### Form validation
1. Client-side form validation is an important part of a great user experience. AngularJS lets you declare the validation rules of the form without having to write JavaScript code.
2. Write less code

### Server communication
1. AngularJS provides built-in services on top of XHR as well as various other backends using third party libraries. Promises further simplify your code by handling asynchronous return of data

### Create components

1. **Directives** : Directives are a unique and powerful feature available in AngularJS. Directives let you invent new HTML syntax, specific to your application
  * An instruction to angularjs to manipulate a piece of DOM.
  * This could be *ADD a Class*, *Hide this*, *Create This* etc
2. **Reusable components** : We use directives to create reusable components. A component allows you to hide complex DOM structure, CSS, and behavior. This lets you focus either on what the application does or how the application looks separately
3. **Localization** : An important part of serious apps is localization. AngularJS's locale aware filters and stemming directives give you building blocks to make your application available in all locales

### Scope services
1. Scope is an object that refers to the application model
2. It is an execution context for expressions
3. Scopes are arranged in hierarchical structure which mimic the DOM structure of the application
4. Scopes can watch expressions and propagate events.
5. Scope characteristics :  
  * Scopes provide APIs ($watch) to observe model mutations
  * Scopes provide APIs ($apply) to propagate any model changes through the system into the view from outside of the "AngularJS realm" (controllers, services, AngularJS event handlers).
  * Scopes provide context against which expressions are evaluated. For example *{{username}}* expression is meaningless, unless it is evaluated against a specific *scope* which defines the *username property*
  * Scopes can be nested to limit access to the properties of application components while providing access to shared model properties.

6. is not actually singleton. but $log,$routeParams etc are singletons

### other services :
1. $log
2. $filter
3. ``` $scope.name = "jaslina";
$scope.formattedname = $filter('uppercase')($scope.name);
$log.info($scope.name);
$log.info($scope.formattedname);

```
4. We can use ngMessages,ngResource etc modules
3. $timeout


### Single page applications

1. angular-route.js
2. Angular provides $location to grab what is in hash .. *https://mail.google.com/mail/u/0/#inbox*  ie after hash sign here it is inbox
3. use **ngroute** routing and deeplinking services and directives for angular apps


## custom directives

#### Normalize
1. To make consistent to a standard.
2. Specifically we are dealing with *text normalization* or making strings of text consistent to a standard.
3. use camel case in  js and hyphen separation in htmls. ie *first-name* in html becomes *firstName* in js..

#### Custom directives

1. `myApp.directive(searchResult,function(){return template:'<p>....</p>'}))`
This is the way to declare

2. ```routeApp.directive("searchResult", function() {
   return {
     restrict: 'AECM',
     templateUrl:'directives/searchresults.html',
     replace:true

   }
});

```
Keeping the template in a separate file.

3. ```<search-result></search-result>
<div search-result></div>
<div class="search-result"></div>

```
It is used like this in the html.

4. The directive can access the scope that it is associated with. So it may cause some issues. So we use the scope in the directive function and for interpolation use it as an attribute in the custom tag.

#### @,=,&
5. ```routeApp.directive("searchResult", function() {
   return {
     restrict: 'AECM',
     templateUrl:'directives/searchresults.html',
     replace:true,
     scope:{
       personName :"@",
       personAddress:"@"
     }
   }
});

```

6. ```

<a href="#" class="list-group-item">
  <h4 class="list-group-item-heading">
    {{personName}}
  </h4>
  <p class="list-group-item-text">
    {{personAddress}}
  </p>
</a>

```
searchresults.html

7. ```  <search-result person-name="{{person.name}}" person-address="{{person.address}}"></search-result>

```
8. If we are using different variable name in *isolated scope*  then we have to give *"@personName"* like @the name in the html.

`scope:{
  personNameVar:"@personName"
  }`

9. **"="** for toway binding. ie saving object.

```scope:{
  personObject : "="
}

```

10. In searchresults.html use like
```<a href="#" class="list-group-item">
  <h4 class="list-group-item-heading">
    {{personObject.name}}
  </h4>
  <p class="list-group-item-text">
    {{personObject.address}}
  </p>
</a>


```

11. in the main.html
```<search-result person-Object="person"></search-result>
```

12. **"&"**
To match functions in the scope.
in the main.html

``` <search-result person-position="{{position}}" person-object="person" formatted-address-function="formattedAddress(aperson)"></search-result>


```

In app.js
``routeApp.controller('maincontroller',['$scope','$log',function($scope,$log){
  $scope.name = "main";
  $scope.position = "Manager",
  $scope.person = {
    name:"Doe, John",
    address:"555 Main St.",
    city:"New York",
    state:"NY" ,
    zip:"11111",

  }
  $scope.formattedAddress = function(person){
    return person.address +" , "+person.city+" , "+ person.state+" , "+person.zip+" ."
  };

  }]);

  routeApp.directive("searchResult", function() {
    return {
      restrict: 'AECM',
      templateUrl:'directives/searchresults.html',
      replace:true,
      scope:{
        personPosition:"@",
        personObject:"=",
        formattedAddressFunction:"&"
      }
    }
    });

```
In searchresults.html

```<a href="#" class="list-group-item">
  <h4 class="list-group-item-heading">
    {{personObject.name}}
  </h4>
  <p class="list-group-item-text">
    {{personPosition}}
  </p>
  <p class="list-group-item-text">
    {{formattedAddressFunction({aperson : personObject})}}
  </p>
</a>


```


### Compile,link

1. Use the compile function to change the original DOM (template element) before AngularJS creates an instance of it and before a scope is created. While there can be multiple element instances, there is only one template element. The ng-repeat directive is a perfect example of such a scenario

2. **compile:** Compiles an HTML string or DOM into a template and produces a template function, which can then be used to link scope and the template together. The compilation is a process of walking the DOM tree and matching DOM elements to directives

3. **pre-link** :Use the pre-link function to implement logic that runs when AngularJS has already compiled the child elements, but before any of the child element's post-link functions have been called.
The scope, instance element and instance attributes are passed to the pre-link function as arguments:


4. **post-link**:Use the post-link function to execute logic, knowing that all child elements have been compiled and all pre-link and post-link functions of child elements have been executed.

This is the reason the post-link function is considered the safest and default place for your code.

The scope, instance element and instance attributes are passed to the post-link function as arguments:

3. **link** : It is the post link function. We mainly use this rather than compile and pre link and post-link.


### Transclusion
1. include one document inside the other
2. Place a copy of one document at a particular point inside another.
3. In app.js directive add *transclude:true,*
.


### $timeout and $evalAsync

1. if code is queued using $evalAsync from a directive, it should run after the DOM has been manipulated by Angular, but before the browser renders
2. if code is queued using $evalAsync from a controller, it should run before the DOM has been manipulated by Angular (and before the browser renders) -- rarely do you want this
3. if code is queued using $timeout, it should run after the DOM has been manipulated by Angular, and after the browser renders (which may cause flicker in some cases)

**evalAsync([expression], [locals]);**
1.  Executes the expression on the current scope at a later point in time.

2. The $evalAsync makes no guarantees as to when the expression will be executed, only that:

3. it will execute after the function that scheduled the evaluation (preferably before DOM rendering).
  at least one $digest cycle will be performed after expression execution.
  Any exceptions from the execution of the expression are forwarded to the $exceptionHandler service.

4. Note: if this function is called outside of a $digest cycle, a new $digest cycle will be scheduled. However, it is encouraged to     always call code that changes the model from within an $apply call. That includes code evaluated via $evalAsync.

**$timeout :** 

1. AngularJS's wrapper for window.setTimeout. The fn function is wrapped into a try/catch block and delegates any exceptions to $exceptionHandler service.


### Differnce $watch and $observe

1. $observe() is a method on the Attributes object, and as such, it can only be used to observe/watch the value change of a DOM attribute. It is only used/called inside directives. Use $observe when you need to observe/watch a DOM attribute that contains interpolation (i.e., {{}}'s). 

2. attr1="Name: {{name}}", then in a directive: attrs.$observe('attr1', ...). 
 (If you try scope.$watch(attrs.attr1, ...) it won't work because of the {{}}s -- you'll get undefined.) Use $watch for everything else.
 
3. $watch : is more complicated. It can observe/watch an "expression", where the expression can be either a function or a string. If the expression is a string, it is $parse'd (i.e., evaluated as an Angular expression) into a function. (It is this function that is called every digest cycle.) The string expression can not contain {{}}'s. $watch is a method on the Scope object, so it can be used/called wherever you have access to a scope object.

### difference between $parse and $eval?

***$parse*** ; Converts AngularJS expression into a function.
***$eval*** : Executes the expression on the current scope and returns the result.

1. $eval is a scope method that executes an expression on the current scope, while $parse is a (more globally available) service.

  So you can say $parse(expr)(context, locals);, with any context, but in the case of $eval the context will be the scope.
  
2. $eval behind the scenes uses $parse against the current scope.
3. $eval always evaluates the expression based on the current scope and returns the result Example:  console.log($scope.$eval("a*b")); 
4. $parse just returns the function and does not work on any scope. Example:
`var func = $parse("a*b");`
   now func can be applied against 
  * any scope
 ```var result = func($scope);
console.log(result); // 8```
  * object
```var result1 = func({a:3 , b:3});    
console.log(result1); // 9```

### How to share information between controllers in AngularJS?

Services

###  $emit() $broadcast() $on()

**$emit**

It dispatches an event name upwards through the scope hierarchy and notify to the registered $rootScope.Scope listeners. The event life cycle starts at the scope on which $emit was called. The event traverses upwards toward the root scope and calls all registered listeners along the way. The event will stop propagating if one of the listeners cancels it.

**$broadcast**

It dispatches an event name downwards to all child scopes (and their children) and notify to the registered $rootScope.Scope listeners. The event life cycle starts at the scope on which $broadcast was called. All listeners for the event on this scope get notified. Afterwards, the event traverses downwards toward the child scopes and calls all registered listeners along the way. The event cannot be canceled.

**$on**

It listen on events of a given type. It can catch the event dispatched by $broadcast and $emit.

### Model View Viewmodel

view - angular js compiled html
viewmodel - controllers
model - angularjs model
