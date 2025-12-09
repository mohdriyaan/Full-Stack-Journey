// Defining
// Every method is a function but not every function is a method
// We can add functions as properties on objects

const myMath = {
    PI: 3.14,
    square: function(num){
        return num*num
    },
    cube(num){
        return num**3
    }
}

console.log(myMath.PI)
console.log(myMath.square(2))
console.log(myMath.cube(2))