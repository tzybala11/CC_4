// Coding Challenge 04

// Step 2: Create array
let products = [
    {name: "pasta",category: "dry grocery",price: 1.99,inventory: 65},
    {name: "bread",category: "dry grocery",price: 2.99,inventory: 37},
    {name: "toothpaste",category: "oral hygiene",price: 2.79,inventory: 22},
    {name: "milk",category: "dairy",price: 3.99,inventory: 18},
    {name: "ground chuck",category: "meats",price: 6.75,inventory: 15}
];

// Step 3: Loops & Discounts
for (const product of products) {
    let discount = 0;
    switch (product.category) {
        case "dry grocery":
            discount = 0.12
            break;
        case "oral hygiene":
            discount = 0.10
            break;
        case "dairy":
            discount = 0.08
            break;
        case "meats":
            discount = 0.05
            break;
        default:
            break;
    }
    // Discounted Unit Price
    let promoPrice = product.price * (1-discount);
    product.promoPrice = promoPrice;
};

console.log(products);