// JavaScript Program to Validate An Email Address

// Simple Way

function validate(email){
    if(email.includes("@")&&email.includes(".")&&email.indexOf("@")<email.indexOf(".")){
        return `Valid email`
    }
    return "Invaild email"
}

console.log(validate("abc@gmail.com"))

// Using RegExp 
function validateRegx(email){
    const regex = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/ 
    if(regex.test(email)){
        return `Valid email`
    }
    return "Invaild email"
}


console.log(validate("abc@"))