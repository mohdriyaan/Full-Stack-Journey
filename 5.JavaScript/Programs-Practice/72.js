// JavaScript Program to Sort Array of Objects by Property Values

// Example 1: Sort Array by Property Name
const students = [{name: 'Sara', age:23},{name: 'John', age:100}, {name: 'Jack', age:25}]

console.log(students.sort(function(a,b){
    const name1 = a.name.toUpperCase()
    const name2 = b.name.toUpperCase()
    
    let comparisons = 0
    if(name1 < name2){
        comparisons = -1
    }else if(name1 > name2){
        comparisons = 1
    }
    return comparisons
}))

// Example 2: Sort Array by Property Age
console.log(students.sort((a,b)=>{
    return a.age-b.age
}))

