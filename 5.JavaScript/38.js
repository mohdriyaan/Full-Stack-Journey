// Arrow Functions:- "Syntatically compact alternative" to a regular function expression

const add = (x,y)=>{
    return x + y
} 

console.log(add(10,4))

const square = (num)=>{
    return num * num
}

console.log(square(10))

const rollDie = ()=>{
    return Math.floor(Math.random()*6)+1
}

console.log(rollDie())

// Implicit Return:- Works iff one and only one expression in the body of function
const cube = (num)=>(
    num*num*num
)

console.log(cube(2))

// const rollDie = ()=>{
//     console.log(rollDie)
//     return Math.floor(Math.random()*6)+1
// } // Implicit return will not work

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

const movieTitles= movies.map((movies)=>{
    return `${movies.title}`
})

console.log(movieTitles)
