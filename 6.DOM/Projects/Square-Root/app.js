const input = document.querySelector("#input")
const output = document.querySelector("#output")
const submit = document.querySelector("#submit")
const resetBtn = document.querySelector("#reset")


input.addEventListener("input",function(){
    if(input.value==""){
        output.value=""
    }
})

submit.addEventListener("click",function(e){
    e.preventDefault()
    const value = parseInt(input.value)
    if(isNaN(value)){
        output.value = "Invalid input"
        return;
    }
    const sqroot = Math.sqrt(value)
    if(!Number.isInteger(sqroot)){
        output.value = sqroot.toPrecision(4)
    }else{
        output.value = sqroot
    }
})


function reset(){
    input.value = ""
    output.value = ""
}

resetBtn.addEventListener("click",reset)





