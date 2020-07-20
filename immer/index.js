"use strict";
exports.__esModule = true;
var immer_1 = require("immer");
var productData = [
    {
        name: "Apple Iphone",
        price: 50000
    },
    {
        name: "Samsung Galaxy 10",
        price: 60000
    },
    {
        name: "Oneplus 6",
        price: 40000
    }
];
var nextProductData = immer_1["default"](function (productData, draft) {
    draft.push({ name: "Nokia", price: 4000 });
    // return draft;
});
console.log(productData.length);
console.log(nextProductData);
