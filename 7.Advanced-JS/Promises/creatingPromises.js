// new Promise((resolve,reject)=>{
//     resolve()
// })

// const fakeRequest = (url)=>{
//     return new Promise((resolve,reject)=>{
//         const rand = Math.random()
//         if(rand<0.7){
//             resolve(`Success!!! Here is the fake ${url}`)
//         }
//         reject(`Failed!!!`)
//     }
// )}

// fakeRequest("/dogs/1")
//     .then((res)=>{
//         console.log(res)
//     })
//     .catch((res)=>{
//         console.log(res)
//     })

const delayedColorChange = (color,delay)=>{
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            document.body.style.backgroundColor= color;
            resolve()
        },delay)
    })
}

delayedColorChange("red",1000)
    .then(()=>{
        return delayedColorChange("blue",1000)
    })
    .then(()=>{
        return delayedColorChange("orange",1000)
    })
    .then(()=> delayedColorChange("aqua",1000))
    .then(()=> delayedColorChange("green",1000))
