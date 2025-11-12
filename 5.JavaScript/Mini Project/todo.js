let userInput = prompt("What would you like to do")

const todos = []

while(userInput!=="quit" && userInput!=="q"){
    if(userInput==="list"){
        if(todos.length==0){
            console.log("List is empty")
        }else{
            console.log("**************")
            for(let i = 0; i<todos.length;i++){
                console.log(`${i} : ${todos[i]}`)
            console.log("**************")
            }
        }
    }else if(userInput==="new"){
        let value = prompt("Enter the todo you wanted to add to the list!")
        todos.push(value)
        console.log(`${value} added to the list`)
    }else if(userInput==="delete"){
        let value = parseInt(prompt("Ok! Tell me the value/index you want to delete"))
        if(!Number.isNaN(value)){
            value = parseInt(value)
            const deleted = todos.splice(value,1)
            console.log(`${deleted} has been deleted from the list`)
        }else{
            console.log("Unknown Index")
        }
    }
        userInput = prompt("What would you like to do")
}

console.log("You Quit!")

