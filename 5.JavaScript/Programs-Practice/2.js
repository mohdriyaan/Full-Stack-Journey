function sum(){
    let num1 = parseInt(prompt("Enter the number 1:-"))
    let num2 = parseInt(prompt("Enter the number 2:-"))

   
    if(isNaN(num1)||isNaN(num2)){
        alert("Invalid Number. Please enter again!")
        return sum()
    }
    
    return num1+num2
}




console.log(sum())