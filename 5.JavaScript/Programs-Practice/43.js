// JavaScript Program to Check if a Key Exists in an Object

// Check if Key Exists in Object Using in Operator
const obj = {
    name:"Riyaan",
    score:[1,2,3,4]
}

// const hasKey = "name" in obj

// if(hasKey){
//     console.log(`The property exists`)
// }else{
//     console.log(`Does not exists`)
// }

// Check if Key Exists in Object Using hasOwnProperty()

if(obj.hasOwnProperty("nam")){
    console.log("KEy exists")
}else{
    console.log("KEy does not exists")
}

