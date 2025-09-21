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

//Step 4: Customer Discounts
const customerType = ["member","silver","gold","platinum"]; //Member: 0%, Silver: 2%, Gold: 5%, Platinum: 10%
if (customerType === "platinum") {
    total = subTotal * 0.10;
    console.log(`Thank you for being a Platinum member! A 10% discount has been applied to your transaction: ${total}`);
} else if (customerType === "gold") {
    total = subTotal * 0.05;
    console.log(`Thank you for being a Platinum member! A 5% discount has been applied to your transaction: ${total}`);
} else if (customerType === "silver") {
    total = subTotal * 0.02;
    console.log(`Thank you for being a Platinum member! A 2% discount has been applied to your transaction: ${total}`);
} else if (customerType === "member") {
    total = subTotal;
    console.log(`Thank you for being a Member! Your total today is: ${total}`);
};