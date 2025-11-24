// JavaScript Program to Check if An Array Contains a Specified Value
function check(arr,value){
    if(arr.includes(value)){
        console.log(`${value} is found in array`)
    }else{
        console.log(`${value} does not exist in the array`)
    }
}

check([1,2,33,4,5],133)
