// JavaScript Program to Merge Two Arrays and Remove Duplicate Items

function uniqueMergeArray(arr1,arr2){
    let arr = arr1.concat(arr2)
    let uniqueArr = []

    for(let i = 0; i< arr.length; i++){
        if(uniqueArr.indexOf(arr[i])==-1){
            uniqueArr.push(arr[i])
        }
    }
    console.log(uniqueArr)
}

uniqueMergeArray([1,2,3,4],[4,3,5,6,7])
