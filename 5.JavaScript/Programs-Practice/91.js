class Stack{
    constructor(){
        this.items = []
    }

    // Add elements into the stack
    add(element){
        return this.items.push(element)
    }

    // Remove element from the stack
    remove(){
        if(this.items.length>0){
            return this.items.pop()
        }
    }

    // view the last element
    peek(){
        return this.items[this.items.length -1]
    }

    // check if the stack is empty
    isEmpty(){
        return this.items.length==0
    }

    // the size of the stack
    size(){
        return this.items.length
    }

    // empty the stack
    clear(){
        this.items = []
    }

}

let stack = new Stack()
stack.add(1)
stack.add(1)
stack.add(2)
stack.add(3)
stack.add(4)
stack.add("hello")

console.log(stack.items)

console.log(stack.size())

console.log(stack.peek())

console.log(stack.isEmpty())

stack.remove()

console.log(stack.peek())

stack.clear()

console.log(stack.items)
console.log(stack.size())
console.log(stack.isEmpty())
