function encode(str) {
    let bin = str.split("").map((items) => {
        return items.charCodeAt(0).toString(2).padStart(8, "0")
    }).join("")

    const newArr = []

    for (let i = 0; i < bin.length; i += 6) {
        newArr.push(bin.slice(i, i + 6))
    }

    const base64Char = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/="

    let encStr = ""
    newArr.map((items) => {
        
        if (items[items.length - 1].length < 6) {
            items = items.padEnd(6, "0") 
        }
        items = parseInt(items, 2) // [32]
        const decimalValue = base64Char[items] // base64Char[32] 
        encStr += decimalValue
    })
    // for(let elements of newArr){
    //     if(elements.length<6){
    //         elements = elements.padEnd(6,"0")
    //     }
    //     const decimalValue = base64Char[parseInt(elements,2)]
    //     encStr+=decimalValue
    // }

    let remainder = bin.length % 6

    if (remainder == 4) {
        encStr += "="
    } else if (remainder == 2) {
        encStr += "=="
    }

    console.log(encStr)
}

// function decode(encStr){
//     while(encStr.endsWith("=")){
//         encStr = encStr.slice(0,-1)
//     }
//     const base64Char = ""    
// }

// decode("aGVsbG8=")

