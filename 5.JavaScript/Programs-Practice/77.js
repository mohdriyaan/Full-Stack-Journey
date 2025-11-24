// JavaScript Program To Perform Intersection Between Two Arrays

// Example 1: Perform Intersection Using filter() Method
function intersection(arr1,arr2){
    let result = arr1.filter((ele)=>arr2.indexOf(ele)!==-1) 
    console.log(result)
}

function intersection1(arr1,arr2){
    let array1 = new Set(arr1)
    let array2 = new Set(arr2)

    let newArr = []

    for(let i of array1){
        if(array2.has(i)){
            newArr.push(i)
        }
    }

    console.log(newArr)
}

intersection([1,2,3,5,9],[1,3,5,8])
intersection1([1,2,3,5,9],[1,3,5,8])