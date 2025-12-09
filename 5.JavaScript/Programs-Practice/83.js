// JavaScript Program to Illustrate Different Set Operations

// Example 1: Set Union Operation
function union(arr1,arr2){
    let unionSet = new Set(arr1)
    for(let i of arr2){
        unionSet.add(i)
    }
    console.log(unionSet)
}

union(['apple', 'mango', 'orange'],['grapes', 'apple', 'banana'])

// Example 2: Set Intersection Operation
function intersection(arr1,arr2){
    let intersectionSet = new Set()
    let setA =  new Set(arr1)
    let setB = new Set(arr2)
    for(let i of setB){
        if(setA.has(i)){
            intersectionSet.add(i)
        }
    }
    console.log(intersectionSet)
}

intersection(['apple', 'mango', 'orange'],['grapes', 'apple', 'banana'])

// Example 3: Set Difference Operation
// perform difference operation
// elements of set a that are not in set b
function difference(setA, setB) {
    let differenceSet = new Set(setA)
    for (let i of setB) {
        differenceSet.delete(i)
    }
    return differenceSet
}

// two sets of fruits
const setA = new Set(['apple', 'mango', 'orange']);
const setB = new Set(['grapes', 'apple', 'banana']);

const result = difference(setA, setB);

console.log(result); 

// Example 4: Set Subset Operation
function subset(arr1,arr2){
    let setA = new Set(arr1)
    let setB = new Set(arr2)

    for(let i of setB){
        if(!setA.has(i)){
            return false
        }
    }
    return true
}

console.log(subset(['apple', 'mango', 'orange'],["apple","orange","guava"]))