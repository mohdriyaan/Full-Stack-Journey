// Axios :- A library for making http requests.

// const getStarsWarsPeople = async(id) => {
//     try{
//         const res = await axios.get(`https://swapi.dev/api/people/${id}`)
//         console.log(res.data.name)
//     }catch(err){
//         console.log(`Error : ${err}`)
//     }
// }

// getStarsWarsPeople(1)
// getStarsWarsPeople(10)


const jokes = document.querySelector("#jokes")
const button = document.querySelector("button")

const getNewJoke=async()=>{
    const jokeText = await getDadJoke()
    const newLi = document.createElement("li")
    newLi.append(jokeText)
    jokes.append(newLi)
}

const getDadJoke = async()=>{
    try{
        const config = {headers : {Accept:"application/json"}}
        const res = await axios.get("https://icanhazdadjoke.com/",config)
        return res.data.joke
    }catch(e){
        return `No Mote Jokes :( 
        Error : ${e}`
    }
    
    // button.addEventListener("click",()=>{
    //     const newLi = document.createElement("li")
    //     newLi.append(res.data.joke)
    //     jokes.append(newLi)
    // })
}

button.addEventListener("click",getNewJoke)