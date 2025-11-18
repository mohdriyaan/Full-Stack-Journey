// JavaScript Program to Check Armstrong Number
function isArmstrong(num){
    let sum = 0
    let numDigits = String(num).length
    let temp = num;
    while(temp>0){
        let remainder = temp%10
        // console.log(`remainder:-${remainder}`)
        sum+= remainder**numDigits
        // console.log(`sum:${sum}`)
        temp = parseInt(temp/10)
        // console.log(`Remaining Num:- ${num}`)
    }
    // console.log(sum)
    if(sum==num){
        console.log(`${sum} is an Armstrong number`)
    }else{
        console.log(`${sum} is not an Armstrong number`)
    }
}

isArmstrong(153)
