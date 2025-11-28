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