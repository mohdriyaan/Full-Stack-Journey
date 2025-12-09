// Square root of the number

function sqroot(){
    let num = parseFloat(prompt("Enter the number:-"))
    if(isNaN(num)){
        alert("Invalid number")
        sqroot()
    }
    
    const result = Math.sqrt(num)

    if(isNaN(result)){
        alert("imaginary number")
        sqroot()
    }
    return result
    
}

console.log(sqroot())

