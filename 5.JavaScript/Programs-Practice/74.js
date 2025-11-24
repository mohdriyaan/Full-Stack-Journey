// JavaScript Program to Extract Given Property Values from Objects as Array
// Using For Loop
function extractProp(arr,prop){
    let extractedValue = []
    for(let i = 0 ; i<arr.length; i++){
        extractedValue.push(arr[i][prop])       
    }
    console.log(extractedValue.filter((numbers)=>{
        if(numbers!==undefined){
            return numbers
        }
    }))
    // console.log(extractedValue)
    // let newValue = []
    
    // for(let i = 0; i<extractedValue.length;i++){
    //     if(extractedValue[i]!==undefined){
    //         newValue.push(extractedValue[i])
    //     }
    // }
    
    // console.log(newValue)
}

// Using Map Method
function extract1Prop(arr,prop){
    console.log(arr.map((item)=>item[prop]).filter((items)=>{
        if(items!==undefined){
            return items
        }
    }))
}
const objArr = [{a:"hello",b:"cool"},{c:"asws",d:"Wdsws"},{s:"eseq",a:"hello boi"}]
const objArray = [{a: 1, b: 2}, {a: 4, b: 5}, {a: 8, b: 9}];

extractProp(objArr,"a")
extract1Prop(objArr,"a")

