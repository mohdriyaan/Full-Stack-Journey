// Template Literals
let product = "Artichoke";

let price = 3.99;

let qty = 5;
console.log("You bought"+ " " + qty + " "+ product + ". Total is: "+ price*qty)

// Template litergals are strings that allow embedded expressions, which will be evaluated and then turned into a resulting string.
// We use back-ticks for template literals
console.log(`You bought ${qty} ${product}. Total is: ${(price*qty).toPrecision(3)}`)