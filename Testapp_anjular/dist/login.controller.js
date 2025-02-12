"use strict";
var LoginController = /** @class */ (function () {
    function LoginController($location) {
        this.$location = $location;
        this.username = "";
        this.password = "";
        this.isLoggedIn = false;
    }
    LoginController.prototype.login = function () {
        if (this.username === "admin" && this.password === "admin") {
            this.isLoggedIn = true;
            this.$location.path("/products"); // ✅ Redirect to product page
        }
        else {
            alert("Invalid username or password!");
        }
    };
    LoginController.$inject = ["$location"];
    return LoginController;
}());
// Register the controller
angular.module("myApp").controller("LoginController", LoginController);
