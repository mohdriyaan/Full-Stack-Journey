// JavaScript Program to Perform Function Overloading
function sum(){
    if(arguments.length==0){
        return `No arguments passed`
    }else if(arguments.length==1){
        return `Pass more than one argument to perform sum operation`
    }else{
        let result = 0
        for(let i = 0; i<arguments.length;i++){
            result+=arguments[i]
        }
        return result
    }
}

console.log(sum())
console.log(sum(1))
console.log(sum(1,2,3,4,5))