// JavaScript Program to Format Numbers as Currency Strings

// Format Numbers as Currency String Using concatenation

const number = 1234.5678;

const result = '$' + number.toFixed(2);

console.log(result);

// Format Numbers as Currency String Using toLocaleString()
const result1 = (number).toLocaleString(`en-US`,{
    style:"currency",
    currency:"USD"
})

console.log(result1)

