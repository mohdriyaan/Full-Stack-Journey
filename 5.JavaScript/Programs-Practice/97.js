function encode(str){
    let splits = str.split("")
    let bin = splits.map((elements)=>{
        return elements.charCodeAt(0).toString(2).padStart(8,"0")
    }).join("")

    let chuncks = []
    for(let i = 0; i<bin.length;i+=6){
        chuncks.push(bin.slice(i,i+6))
    }

    const base64Char = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/"
    
    let result = ""

    let remainder = bin.length%6

    for(let chunck of chuncks){
        if(chunck.length<6){
            chunck = chunck.padEnd(6,"0")
        }
        const decimalValue = parseInt(chunck,2)
        result+=base64Char[decimalValue] 
    }

    if(remainder===2){
        result+="=="
    }

    if(remainder===4){
        result+="="
    }

    console.log(result)    
}

encode("MAN")

function decode(str){
    const base64Char = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/"

    while(str.endsWith("=")){
        str = str.slice(0,-1)
    }

    let binary = ""
    for(let ch of str){
        const index = base64Char.indexOf(ch)
        binary+=index.toString(2).padStart(6,"0")
    }

    let result = ""

    for(let i = 0; i<binary.length;i+=8){
        const byte = binary.slice(i,i+8)
        const charCode = parseInt(byte,2)
        result+=String.fromCharCode(charCode)
    }

    console.log(result)
}

decode("TUFO")