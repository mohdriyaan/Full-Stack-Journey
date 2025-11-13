// Scope:- cariable "visibility"
/* 
The location where a variable is defined dictates where we have access gto that variable.
*/

let num = 0 // global variable
function func(){
    let str = "hello" // local variable
    num+=5 // updating global variable
}
console.log(num)
func()
console.log(num)
// console.log(str) // str is not defined
