// Nesting conditionals

const password = prompt("Enter a password");
if(password.length>=6){
    if(password.indexOf(" ")==-1){
        console.log("Valid password!")
    }else{
        console.log("Password cannot contain spaces.")
    }
}else{
    console.log("Password too short. Must be 6+ characters")
}



