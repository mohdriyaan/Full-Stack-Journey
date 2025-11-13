let radius = 8
if(radius>0){
    const PI= 3.14159
    let msg = "HIII!"
}
console.log(radius) // 8
// console.log(msg) // error
// This is due to conditional statement in the block scope. Same applied for loop statements.

// Lexical Scope
function bankRobbery(){
    const heroes = ["Spiderman","Batman","Superman"]
    function cryforHelp(){
        function inner(){
            for(let hero of heroes){
                console.log(`PLEASE HELP US ${hero}`)
            }
        }
        inner()
    }
    cryforHelp()
}

bankRobbery()

