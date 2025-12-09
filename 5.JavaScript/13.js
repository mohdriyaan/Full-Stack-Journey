// Inherent truthyness and falsyness values
/* 
All JS values are truthy except:-
false
0
"" (empty string)
null
undefiined
NaN
*/

// const input = prompt("Enter something: ")
// if(input){
//     console.log("Truthy")
// }else{
//     console.log("Falsy")
// }

// if(0){
//     console.log("truthy")
// }else{
//     console.log("falsy")
// }

// if(null){
//     console.log("truthy")
// }else{
//     console.log("falsy")
// }

if(NaN){
    console.log("truthy")
}else{
    console.log("falsy")
}

if(undefined){
    console.log("truthy")
}else{
    console.log("falsy")
}

if(" "){
    console.log("truthy")
}else{
    console.log("falsy")
}
