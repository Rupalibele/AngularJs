"use strict";
var ProductController = /** @class */ (function () {
    function ProductController() {
        this.products = [
            { name: "Laptop", price: "$1000", image: "images/laptop.jpg", description: "High-end laptop" },
            { name: "Phone", price: "$500", image: "images/phone.jpg", description: "Latest smartphone" }
        ];
    }
    return ProductController;
}());
// Register the controller
angular.module("myApp").controller("ProductController", ProductController);
