// filter method:- Creates a new array with all the elements that pass the test implemented by the provided function.

const numbers= [1,2,3,4,5,6,7,8,9,10]

console.log(numbers.filter((num)=>{
    return num===4
}))

console.log(numbers.filter((num)=>{
    return num<5
}))

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
    },
    {
        title:"Harry potter",
        score:95
    }
]

// printing movies with only the 90+ score
// const highRatedMovies = movies.filter((movies)=>{
//     return movies.score>90
// })

// const highRatedTitles = highRatedMovies.map((movies)=>{
//     return movies.title
// }) 

// console.log(highRatedMovies)
// console.log(highRatedTitles)

const highRated = movies.filter((movies)=>{
    return movies.score>90
}).map((movies)=> movies.title)

console.log(highRated)

// some method:- Similiar to every, but returns true if any of the array elements pass the test function

const examScores = [70,75,90,98,92,80,77,84,81,77]
console.log(examScores.every(scores=>scores<80)) // tests if every score is less than 80 
console.log(examScores.some(scores=>scores<80)) // tests if at least one score is less tha 80

// checking if any movie in the array has the score above 90
console.log(movies.some((movies)=>movies.score>90))

// reduce method:- Executes a reduces function on each element of the array resulting in a single value

const prices = [2.33,10.21,6.5,3.8]
const total = prices.reduce((total,price)=> total+price)
console.log(total)
console.log(prices.reduce((min,price)=>{
    if(price<min){
        return price
    }
    return min
}))

console.log(movies.reduce((highestRated,currentMovie)=>{
    if(currentMovie.score > highestRated.score){
        return currentMovie
    }
    return highestRated
}))

const even = [2,4,6,8]
console.log(even.reduce((sum,num)=>sum+num,100))
