// A Promise is an object representing the eventual completion or failure of an asynchronous function.

// CallBack Hell
// const fakeRequestCallback=(url,success,failure)=>{
//     const delay = Math.floor(Math.random()*4500)+500
//     setTimeout(()=>{
//         if(delay>4000){
//             failure("Connection Timeout")
//         }else{
//             success(`Here is your fake date from ${url}`)
//         }
//     },delay)
// }

// fakeRequestCallback("books.com/page1",
//     function(response){
//     console.log("SUCCESS!!")
//     console.log(response)
//     fakeRequestCallback("books.com/page2",
//         function(response){
//             console.log(response)
//             console.log("SUCCESS (2nd req)")
//         },function(err){
//             console.log(err)
//             console.log("error (2nd req)")
//         }
//     )
// },function(err){
//     console.log("ERROR!!")
//     console.log(err)
// })

// Using Promises:- A promise is a returned object to which you attach callbacks, instead of passing callbacks to a function.
const fakeRequestPromise=(url)=>{
    return new Promise((resolve,reject)=>{
        const delay = Math.floor(Math.random()*4500)+400
        setTimeout(()=>{
            if(delay>4000){
                reject(`Connection timeout`)
            }else{
                resolve(`Here is your fake data from ${url}`)
            }
        },delay)
    })
}

// const request = fakeRequestPromise("books.com/api")
// request
//     .then(()=>{
//         console.log("PROMISE RESOLVED (req1)!!")
//         console.log("WORKED!!")
//         fakeRequestPromise("books.com/api/page2")
//         .then(()=>{
//             console.log("PROMISE RESOLVED! (req2)")
//             console.log("WORKED!!")
//         })
//         .catch(()=>{
//             console.log("PROMISE REJECTED (req2)")
//             console.log("ERROR!!")
//         })
//     })
//     .catch(()=>{
//         console.log("PROMISE REJECTED (req2)")
//         console.log("OH NO, ERROR!!")
//     })

fakeRequestPromise('google.co/page1')
    .then((data)=>{
        console.log("It worked (page1)")
        console.log(data)
        return fakeRequestPromise("google.co/page2")
    })
    .then((data)=>{
        console.log("It worked (page2)")
        console.log(data)
        return fakeRequestPromise("google.co/page3")
    })
    .then((data)=>{
        console.log("It worked (page3)")
        console.log(data)
    })
    .catch((err)=>{
        console.log("OH NO!!, A REQUEST FAILED!!")
        console.log(err)
    })
