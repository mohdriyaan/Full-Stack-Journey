// Async functions:- A newer and cleaner syntax for working with async code!
// Syntax "makeup" for promises

// 2 pieces:- async and await

/* Async functions always return a promise
--> If the promise returns a value, the promise will be resolved with that value
--> If the function throws an exception, the promise will be rejected.
*/

// resolve
// async function hello(){
//     return "Hi hello" 
// }

// console.log(hello())
// hello().then((data)=> console.log(`Promise Resolved With ${data}`))

// // reject
// const sing = async()=>{
//     throw "UH OH OH!!"
//     return `lalalalala`
// }

// sing()
//     .then((data)=>{
//         console.log(`Promise resolved with ${data}`)
//     })
//     .catch((err)=>{
//         console.log("error")
//         console.log(`Promise rejected with ${err}`)
//     })

const login = async(username,password)=>{
    if(!username||!password){
        throw "Missing credentials"
    }
    if(password==="hello"){
        return `You are welcome`
    }
    throw `Invalid password`
}

login("ajdwkdewd","hello")
    .then((data)=>{
        console.log("LOGGED IN!!")
        console.log(data)
    })
    .catch((err)=>{
        console.log(err)
    })

