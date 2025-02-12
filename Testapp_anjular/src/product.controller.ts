declare var angular: any; // ✅ Fix AngularJS in TypeScript

class ProductController {
    products: { name: string; price: string; image: string; description: string }[];

    constructor() {
        this.products = [
            { name: "Laptop", price: "$1000", image: "images/laptop.jpg", description: "High-end laptop" },
            { name: "Phone", price: "$500", image: "images/phone.jpg", description: "Latest smartphone" }
        ];
    }
}

// Register the controller
angular.module("myApp").controller("ProductController", ProductController);
