// JavaScript Program to Check if a String Starts With Another String

function checkStr(string,checkStr){
    if(string.startsWith(checkStr)){
        console.log(`${checkStr} starts with ${string}`)
    }else{
        console.log(`${checkStr} does not start with ${string}`)
    }
}

checkStr("hello","he")
