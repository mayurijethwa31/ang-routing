var app=angular.module("myapp",["ui.router"]);
app.config(function($stateProvider,$urlRouterProvider){
    $urlRouterProvider.otherwise('/index');
    $stateProvider
    .state("books",{
        url:"/books",
        templateUrl:"books.htm",
         controller:"bookctrl"
    })
    .state("accessories",{
        url:"/accessories",
        templateUrl:"accessories.htm",
        controller:"accessctrl"
    });
  
    
});
app.controller("bookctrl",function($scope){
    $scope.msg="Welcome"; 
});
app.controller("accessctrl",function($scope){
    $scope.msg="Welcome"; 
});