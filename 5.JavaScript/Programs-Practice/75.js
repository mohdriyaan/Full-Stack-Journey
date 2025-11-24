// JavaScript Program to Compare Elements of Two Arrays

// Example 1 : Compare Arrays Using JSON.stringify()
function compare(arr1,arr2){
    if(JSON.stringify(arr1)==JSON.stringify(arr2)){
        return `${arr1} and ${arr2} are equal`
    }
    return `${arr1} and ${arr2} are not equal`
}

// Example 2: Compare Arrays using for Loop
function compare1(arr1,arr2){
    if(arr1.length!==arr2.length){
        return `${arr1} and ${arr2} are not equal.` 
    }else{
        for(let i = 0; i<arr1.length;i++){
            if(arr1[i]!==arr2[i]){
                return `${arr1} and ${arr2} are not equal.` 
            }
        }
        return `${arr1} and ${arr2} are equal.` 
    }
}

console.log(compare([1,3,5,8],[1,3,5,7]))
console.log(compare1([1,3,5,8],[1,3,5,7]))