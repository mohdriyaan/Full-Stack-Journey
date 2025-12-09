// JavaScript Program to Make a Simple Calculator
function calc(num1,num2,operator){
    switch(operator){
        case "+":{
            console.log(num1+num2)
            break;
        }
        case "-":{
            console.log(num1-num2)
            break;
        }
        case "/":{
            console.log(num1/num2)
            break;
        }
        case "*":{
            console.log(num1*num2)
            break;
        }
        case "%":{
            console.log(num1%num2)
            break;
        }
        case "**":{
            console.log(num1**num2)
            break;
        }
        default:{
            console.log("Invalid Operator")
            break;
        }
    }
}

calc(10,2,"/")