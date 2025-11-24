// JavaScript Program to Remove Duplicates From Array
const arr = [1,2,3,1,2,4,5,4]
// const uniqueArr = []

// for(let i =0 ; i<arr.length;i++){
//     if(uniqueArr.indexOf(arr[i])==-1){
//         uniqueArr.push(arr[i])
//     }
// }

// console.log(uniqueArr)

console.log([...new Set(arr)])



