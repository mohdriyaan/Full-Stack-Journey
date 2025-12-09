// Try/Catch is used for error handling. It does not break the execution of the code while maintaining error handling

// try{
//     console.log(hello.toUpperCase())
// }catch{
//     console.log("ERROR!!!!")
// }

// console.log("AFTER")

function yell(msg){
    try{
        return( msg.toUpperCase().repeat(3))
    }catch (e) {
        console.log(e) // provides error information
        return("Please pass a string!")
    }
}

console.log(yell(123))