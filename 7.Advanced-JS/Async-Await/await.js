/* 
--> We can only use await keyword inside of fn.s declared with async
--> await will pause the execution of the fn, waiting for the promise to be resolved.
*/

const delayedColorChange = (color,delay)=>{
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            document.body.style.backgroundColor=color 
            resolve()
        },delay)
    })
    
}

// delayedColor("red",1000)
//     .then(()=> delayedColor("violet",1000))
//     .then(()=>delayedColor("magenta",1000))
//     .then(()=>delayedColor("aqua",1000))
//     .then(()=>delayedColor("orange",1000))
//     .then(()=>delayedColor("indigo",1000))
//     .then(()=>delayedColor("green",1000))

async function rainbow(){
    await delayedColorChange("red",1000)
    await delayedColorChange("orange",1000)
    await delayedColorChange("aqua",1000)
    await delayedColorChange("indigo",1000)
    await delayedColorChange("green",1000)
    await delayedColorChange("magenta",1000)
    return "All DONE"
}

async function printRainbow(){
    await rainbow()
    console.log("END OF RAINBOW!!!!")   
}


printRainbow()

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

const makeRequest=async()=>{
    try{
        let data1 = await fakeRequestPromise("/api/1.txt")
        console.log(data1)
        let data2 = await fakeRequestPromise("/api/2.txt")
        console.log(data2)
    }catch(err){
        console.log("Error Caught")
        console.log(`error is ${err}`)
    }
}

makeRequest()
