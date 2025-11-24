// JavaScript Program to Split Array into Smaller Chunks

// Example 1: Split Array Using slice()

function sliceChunks(arr,chuncks){
    let tempArray
    for(let i = 0; i< arr.length; i+=chuncks){
        tempArray=arr.slice(i,i+chuncks)
        console.log(tempArray)
    }
}

sliceChunks([1,2,3,4,5,6,7,8],4)

// Example 2:- Using splice() method

function sliceChunks1(arr,chunks){
    let tempArray
    while(arr.length>0){
        tempArray = arr.splice(0,chunks)
        console.log(tempArray) 
    }
}

sliceChunks1([1,2,3,4,5,6,7,8],4)