// JavaScript Program to Insert Item in an Array
function addItem(arr,index,element){
    arr.splice(index,0,element)
    console.log(arr)
}

addItem([1,2,4,5],2,3)