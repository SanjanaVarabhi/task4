var app=angular.module("myApp",[]);
var app=angular.module("myApp",["ngRoute"]);
app.controller("myCtr",function($scope,$http){
    $http.get("data.json").then(function(item){
        $scope.posts=item.data;
    })
})