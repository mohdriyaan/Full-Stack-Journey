function vowels(str){
    let vowels = ["a","e","i","o","u"], count = 0
    str = str.toLowerCase()
    for(let i = 0 ; i<str.length;i++){
        if(vowels.includes(str[i])){
            console.log(`Vowels found at position ${i}`)
        }
    }
    // console.log(count)
}

vowels("hello")
