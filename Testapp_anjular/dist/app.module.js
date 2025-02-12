"use strict";
angular.module("myApp", ["ngRoute"])
    .config([
    "$routeProvider",
    function ($routeProvider) {
        $routeProvider
            .when("/", {
            templateUrl: "views/login.html",
            controller: "LoginController",
            controllerAs: "loginCtrl"
        })
            .when("/products", {
            templateUrl: "views/product.html",
            controller: "ProductController",
            controllerAs: "productCtrl"
        })
            .otherwise({ redirectTo: "/" });
    }
]);
