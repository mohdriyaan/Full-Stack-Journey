// JavaScript Program to Get File Extension

// Example 1: Using split() and pop()

function getFileExtension(file){
    const splits = file.split(".")
    const fileExtension = splits.pop()
    console.log(fileExtension)
}

getFileExtension("67.js")

// Example 2: Using substring() and lastIndexOf()
function getFileExtension1(file){
    const extension = file.substring(file.lastIndexOf(".")+1,file.length)
    console.log(extension)
}

getFileExtension("wqsbdx.js")