// JavaScript Program to Check Whether a String is Palindrome or Not

// Example 1: Check Palindrome Using for Loop
// function palindrome(str){ // dad
//     const len = str.length // 3
//     for(let i = 0; i<len/2;i++){ // 0<1
//         if(str[i]!==str[len - 1 - i]){ // str[0] = d  == str[len-1-i] = str[3-1-0] = str[2] = d
//             return `${str} is not a palindrome`
//         } 
//     }
//     return `${str} is a palindrome`
// }

// Example 2: Check Palindrome using built-in Functions
function palindrome(str){ // dad
    const arrStr = str.split("")
    const revArr = arrStr.reverse()
    const revStr = revArr.join("")
    if(str===revStr){
        console.log(`${str} is a palindrome`)
    }else{
        console.log(`${str} is not a palindrome`)
    }
}


