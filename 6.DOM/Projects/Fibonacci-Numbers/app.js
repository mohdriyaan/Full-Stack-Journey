const range = document.querySelector("#range")
const submit = document.querySelector("#btn")
const output = document.querySelector("#output")

submit.addEventListener("click",fibonacci)
range.addEventListener("input",()=>{
    if(range.value==""){
        output.value=""
    }
})


function fibonacci(e){
    e.preventDefault()
    const rangeValue = Number(range.value)
    
    if(isNaN(rangeValue)){
        output.value = "Invalid range of number"
        return;
    }
    let firstTerm = 0
    let secondTerm = 1
    let nextTerm, numbers = []
    nextTerm = firstTerm + secondTerm
    numbers.push(firstTerm)
    numbers.push(secondTerm)
    while(nextTerm<=rangeValue){
        numbers.push(nextTerm)
        firstTerm = secondTerm
        secondTerm = nextTerm
        nextTerm = firstTerm + secondTerm
    }
    output.value = numbers.join(", ")
}

