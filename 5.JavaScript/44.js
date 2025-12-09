// Destructuring Arrays
const nums = [1,2,3,4,5,6,7,8,9]

const [gold,silver,bronze,...rest]=nums
console.log(gold,silver,bronze,rest)

// Destructuring Objects
const user = {
    name:"Kratos",
    strength:"90000+",
    years:"5000",
    weapons:"Chain Blades",
    city:"Olympia",
    isAlive:"true"
}

// const {name,strength,years,isAlive,...everythingElse} = user
// console.log(name)
// console.log(strength)
// console.log(years)
// console.log(isAlive)
// console.log(everythingElse)

// const {isAlive:aliveStatus}=user
// console.log(aliveStatus)

const {city,weapons,currentStatus="N/A"}=user
console.log(currentStatus)

// Destructuring params
function info({city,weapons}){
    return `${city} , ${weapons}`
}

console.log(info(user))

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

console.log(movies.filter(({score})=>score>=90).map(({title})=> title))