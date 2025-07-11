/* Product Finding Example [ Arrays ] */

let product1 = {
    name : "Acer Swift",
    category : "Technology",
    price : 6.219
}

let product2 = {
    name : "Acer Gaming",
    category : "Technology",
    price : 15.789
}

let product3 = {
    name : "Acer nitro 5",
    category : "Technology",
    price : 13.999
}

let product4 = {
    name : "Lenovo V15",
    category : "Technology",
    price : 10.999
}

let product5 = {
    name : "Lenovo V14",
    category : "Technology",
    price : 4.399
}

let products = [product1,product2,product3,product4,product5];
let input = prompt("Please enter a product name.");
let filtered = [];

getFilteredProducts(products);
writeFilteredProducts(filtered);

function getFilteredProducts (products) {
    products.forEach(function(product){
        if (product.name.toUpperCase().includes(input.toUpperCase(),0)) {
            filtered.push(product);
        }
    });
}

function writeFilteredProducts (products) {
    products.forEach(function(product){
        console.log("------------------------------------------------------");
        console.log( " | " + product.name + " | " + product.category + " | " + product.price + " | ");
        console.log("------------------------------------------------------");
    });
}
