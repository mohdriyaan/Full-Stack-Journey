// JavaScript Program to Check Whether a String Contains a Substring

// Example 1: Check String with includes()
// function toCheck(str,str1){
//     if(str.includes(str1)){
//         console.log(`The string contains ${str1}`)
//     }else{
//         console.log(`The string does not contain ${str1}`)        
//     }
// }

// Example 2: Check String with indexOf()
function toCheck(str,str1){
    if(str.indexOf(str1)!==-1){
        console.log(`The string contains ${str1}`)
    }else{
        console.log(`The string does not contain ${str1}`)        
    }
}

toCheck("hello I am","hello")
