document.querySelector("button").addEventListener("click",(event)=>{
    console.log(event)
})

const input = document.querySelector("input")
input.addEventListener("keydown",function(event){
    // console.log(event)
    console.log(event.code)
})
// input.addEventListener("keyup",function(){
//     console.log("KEYUP")
// })
window.addEventListener("keydown",function(event){
    switch(event.code){
        case "ArrowUp":
            console.log("UP")
            break;
        case "ArrowDown":
            console.log("Down")
            break;
        case "ArrowLeft":
            console.log("Left")
            break;
        case "ArrowRight":
            console.log("Right")
            break;
        default:
            console.log("Ignored")
            break;    
    }
})
