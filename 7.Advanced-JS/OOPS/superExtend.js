class Pet{
    constructor(name,age){
        console.log("In Pet Constructor")
        this.name = name
        this.age = age
    }
    eat(){
        return `${this.name} is eating`
    }
}


class Cat extends Pet{
    constructor(name,age,livesLeft = 9){
        console.log("In Cat constructor")
        super(name,age)
        this.livesLeft = livesLeft
    }
    meow(){
        return `MEEOOOWWW!!`
    }
}

class Dog extends Pet{
    bark(){
        return `WOOOFFF!!`
    }
    eat(){
        return `${this.name} scarfs his food` // this will get executed
    }
}

const cat1 = new Cat("Monty",9)
console.log(cat1.eat())
console.log(cat1.meow())