const btn = document.querySelector("#v2")

btn.onclick = function(){
    console.log("You clicked me.")
    console.log("I hope it worked")
}

function scream(){
    console.log("AHHHHHHH!!!")
    console.log("STOP TOUCHING ME!!")
}

btn.onmouseenter = scream // Setting the property to a function

// const h1 = document.querySelector("h1")
// h1.onclick= function(){
//     alert("You clicked the h1!")
// }

document.querySelector("h1").onclick=(()=> {
    alert("You clicked h1!")
})

// Event Listener
const btn3 = document.querySelector("#v3")
btn3.addEventListener("dblclick",(()=>{
    alert("CLICKED!")
}))

btn3.addEventListener("mouseup",(()=>{
    alert("CLICKED!")
}))

function twist(){
    console.log("TWIST")
}

function shout(){
    console.log("SHOUT")
}

const tasBtn = document.querySelector("#tas")

// tasBtn.onclick=twist
// tasBtn.onclick=shout
// If we do not use event Listener then the only the shout will be consoled, while using addEvetListener we can have both twist and shout.
tasBtn.addEventListener("click",twist,{once:true}) // runs only once
tasBtn.addEventListener("click",shout)
