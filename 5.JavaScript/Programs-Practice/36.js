// JavaScript Program to Reverse a String
// function reverse(str){
//     let revStr = ""
//     for(let i = str.length-1 ; i>=0 ; i--){
//         revStr+=str[i]
//     }
//     console.log(revStr)
// }

// Reverse a String Using built-in Methods
function reverse(str){
    let strArr = str.split("")
    let revArr = strArr.reverse()
    let revStr = revArr.join("")
    console.log(revStr)
}

reverse("hello")


