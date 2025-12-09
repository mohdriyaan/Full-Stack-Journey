// Fetch API
/*
-> The newer way of making requests via JS
-> Supports promises
*/

// https://swapi.dev/api/people/1

// fetch("https://swapi.dev/api/people/1")
//  .then((res)=>{
//     console.log("Resolved")
//     // console.log(res)
//     return res.json()
//  })
//  .then((data)=>{
//     console.log(data)
//  })
//  .catch((err)=>{
//     console.log("Error")
//     console.log(err)
//  })

const loadStarWarsPeople = async () => {
    try {
        // const res = await fetch("https://swapi.dev/api/people/1")
        // const data = await res.json()
        // const people1 = data.name
        // console.log(people1)
        for (let i = 1; i <= 10; i++) {
            let res = await fetch(`https://swapi.dev/api/people/${i.toString()}`)
            let data = await res.json()
            console.log(data.name)
        }
    } catch (e) {
        console.log(`Error: ${e}`)
    }

}

loadStarWarsPeople()