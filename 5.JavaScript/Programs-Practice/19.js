// JavaScript Program to Check if the Numbers Have Same Last Digit

function sameDigit(num1,num2,num3){
    num1 = num1%10
    console.log(num1)
    num2 = num2%10
    console.log(num2)
    num3 = num3%10
    console.log(num3)

    if(num1==num2&&num1==num3){
        console.log(`All numbers have the same last digits`)
    }else{
        console.log(`Not all the numbers have the same last digits`)
    }
}

sameDigit(3,3,3)
