// JS Program to print armstrong numbers in an interval
function armStrong(low,max){
    for(let i = low; i<=max; i++){
        let noOfDigits = String(i).length
        let temp = i, sum = 0;
        while(temp>0){
            let remainder = temp%10
            sum+= remainder ** noOfDigits
            temp = parseInt(temp/10) 
        }
        if(sum==i){
            console.log(i)
        } 
    }
}

armStrong(1,500)

