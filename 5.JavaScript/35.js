// "This" in Methods
/*
It is used to access other properties on the same object
*/

const cat = {
    name:"Pochita",
    color:"grey",
    breed:"persian",
    meow(){
        return "Meow Meow Meow"
    },
    info(){
        return `My name is ${this.name} and my color is ${this.color}`
    }
}

console.log(cat.meow())
console.log(cat.info())

// The value of this depends on the invocation context of the function it is used in.

const meow2 = cat.info
console.log(meow2()) // this keyword will not work in this case

