function encode(str){
    let splits = str.split("")
    let bin = splits.map((elements)=>{
        elements.charCodeAt(0)
    })
    console.log(bin)
}

encode("hello")
