declare var angular: any; // ✅ Fix AngularJS in TypeScript

class LoginController {
    static $inject = ["$location"];
    username: string;
    password: string;
    isLoggedIn: boolean;

    constructor(private $location: any) { // ✅ Removed explicit `angular.ILocationService`
        this.username = "";
        this.password = "";
        this.isLoggedIn = false;
    }

    login(): void {
        if (this.username === "admin" && this.password === "admin") {
            this.isLoggedIn = true;
            this.$location.path("/products"); // ✅ Redirect to product page
        } else {
            alert("Invalid username or password!");
        }
    }
}

// Register the controller
angular.module("myApp").controller("LoginController", LoginController);
