// JavaScript Program to Remove Specific Item From an Array

// Example 1: Using For Loop

function removeItemFromArray(arr,remove){
    let newArr = []
    for(let i = 0; i<arr.length;i++){
        if(arr[i]!=remove){
            newArr.push(arr[i])
        }
    }
    console.log(newArr)
}

removeItemFromArray([1,2,3,4,5],3)

// using splice
function remove(arr,remove){
    const index = arr.indexOf(remove)
    if(index>-1){
        arr.splice(index,1)
    }
    console.log(arr)
}

remove([1,2,3,4],3)
