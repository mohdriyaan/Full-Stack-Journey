// JavaScript Program to Find HCF or GCD
function hcf(num1,num2){
    // Method 1
    // while(num1!=num2){
    //     if(num1>num2){
    //         num1-=num2
    //     }else{
    //         num2-=num1
    //     }
    // }
    // console.log(`HCF :- ${num1}`)
    
    //Method 2
    for(let i = 1; i<=num1&&i<=num2; i++){
        if(num1%i==0&&num2%i==0){
            hcf = i
        }
    }
    
    console.log(hcf)
}

hcf(60,72)
