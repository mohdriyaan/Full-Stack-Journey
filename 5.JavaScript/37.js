// Array Call Back Methods
// forEach method:- Accepts a callback function. Calls the function once per element in the array

const numbers = [1,2,3,4,5,6,67]

// 1st method 
// function print(element){
//     console.log(element)
// }

// numbers.forEach(print)

// 2nd method
numbers.forEach(function(element){
    console.log(element)
})

numbers.forEach(function(even){
    if(even%2==0){
        console.log(even)
    }
})

const movies = [
    {
        title: "Alien",
        score : 78
    },
    {
        title:"Superman",
        score: 70
    },
    {
        title:"parasite",
        score: 98
    }
]

movies.forEach(function(movies){
    console.log(`${movies.title} - ${movies.score}/100`)
})

// Map Method:- Creates a new array with the result of calling a callback on every element in the array

const square = numbers.map(function(square){
    return square*square
})

console.log(square)

const movieTitles = movies.map(function(movies){
    return movies.title.toUpperCase()
})

console.log(movieTitles)