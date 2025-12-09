// JavaScript Program to Compare Two Strings

function check(str1,str2){
    if(str1.toLowerCase()===str2.toLowerCase()){
        console.log(`${str1} is equal to ${str2}`)
    }else{
        console.log(`${str1} is not equal to ${str2}`)
    }
}

check("hello","helo")
