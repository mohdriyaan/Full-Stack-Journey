console.log("hi"==="hi")
console.log(["hi"]==["hi"])
// JS stores the array as a reference which has its own memory and address
// So array can only be equal if the array points to the same array for ex below:-
let nums = [1,2,3]
let numsCopy = nums;
nums.push(4)
console.log(numsCopy)
console.log(nums)

console.log(nums=== numsCopy)

// We use const for an array because we can have different values as long as the reference address remains same.

