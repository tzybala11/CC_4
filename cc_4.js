// Coding Challenge 04

// Step 2: Create array
let products = [
    {name: "pasta",category: "groceries",price: 1.99,inventory: 65},
    {name: "bread",category: "groceries",price: 2.99,inventory: 37},
    {name: "shirt",category: "apparel",price: 14.99,inventory: 12},
    {name: "headphones",category: "electronics",price: 34.99,inventory: 18},
    {name: "ground chuck",category: "meats",price: 6.75,inventory: 15}
];

// Step 3: Loops & Discounts
for (const product of products) {
    let discount = 0;
    switch (product.category) {
        case "electronics":
            discount = 0.20;
            break;
        case "apparel":
            discount = 0.15;
            break;
        case "groceries":
        case "household":
            discount = 0.10;
            break;
        default:
            break;
    }
    // Discounted Unit Price
    product.promoPrice = (product.price * (1-discount)).toFixed(2);
};

console.log(products);

//Step 4: Customer Discounts
const customerType = ["member","silver","gold","platinum"]; //Member: 0%, Silver: 2%, Gold: 5%, Platinum: 10%
let extraDiscount = 0
if (customerType === "platinum") {
    extraDiscount = 0.10;
    console.log(`Thank you for being a Platinum member! A 10% discount has been applied to your transaction`);
} else if (customerType === "gold") {
    extraDiscount = 0.05;
    console.log(`Thank you for being a Platinum member! A 5% discount has been applied to your transaction`);
} else if (customerType === "silver") {
    extraDiscount = 0.02;
    console.log(`Thank you for being a Platinum member! A 2% discount has been applied to your transaction`);
} else if (customerType === "member") {
    extraDiscount = 0;
    console.log(`Thank you for being a Member!`);
};

//Step 5: Simulated Checkout Process & Inventory Updates
for (subtotal = 0; subtotal < 3; subtotal++) {
    console.log("subtotal" + subtotal)
};
//Step 6: Logging Key/Value Pairs
for (let key in products[0]) {
    console.log(key + ": " + products[0][key]);
};
//Step 7: Object.entries() and Destructuring
for (const [key, value] of Object.entries(products[1])) {
    console.log(key + ": " + value);
};