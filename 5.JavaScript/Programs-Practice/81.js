// JavaScript Program To Check If A Variable Is undefined or null

function check(variable){
    if(variable==null||variable==undefined){
        console.log("Variable not defined")
    }else{
        console.log(`${variable} is defined`)
    }
}


check("hello")