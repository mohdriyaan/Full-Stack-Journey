// JavaScript Program to Loop Through an Object
const obj = {
    name:"John",
    age:24,
    scores:[1,2,3,4,5]
}

for(let values in obj){
    console.log(`${values} : ${obj[values]}`)
}

//  Loop Through Object
for(let [keys,values] of Object.entries(obj)){
    console.log(`${keys} - ${values}`)
}
// The Object.entries() method returns an array of a given object's key/value pairs. 