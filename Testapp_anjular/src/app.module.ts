declare var angular: any; // ✅ Fix AngularJS in TypeScript

angular.module("myApp", ["ngRoute"])
    .config([
        "$routeProvider",
        function ($routeProvider: any) {  // ✅ Removed explicit `angular.route.IRouteProvider`
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
