// setTimeout(()=>{
//     document.body.style.backgroundColor = "red"
// },1000)


// setTimeout(()=>{
//     document.body.style.backgroundColor = "orange"
// },2000)


// setTimeout(()=>{
//     document.body.style.backgroundColor = "green"
// },3000)


// document.body.style.backgroundColor = "white"

// Nesting
// setTimeout(()=>{
//     document.body.style.backgroundColor="red"
//     setTimeout(()=>{
//         document.body.style.backgroundColor="green"
//         setTimeout(()=>{
//             document.body.style.backgroundColor="orange"
//         },1000)
//     },1000)
// },1000)


const delayedColor= (newColor,delay,doNext)=>{
    setTimeout(()=>{
        document.body.style.backgroundColor=newColor
        doNext&&doNext()
    },delay)
}

delayedColor("red",1000,()=>{
    delayedColor("orange",1000,()=>{
        delayedColor("blue",1000,()=>{

        })
    })
})

