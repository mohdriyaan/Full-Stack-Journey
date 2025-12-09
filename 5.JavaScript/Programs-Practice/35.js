// JavaScript Program to Replace Characters of a String
// Ex1:- Replace First Occurrence of a Character in a String

// function replaceStr(){
//     const sentence = prompt("Enter the sentence...")
//     const replaced = sentence.replace("red","blue")
//     console.log(replaced)
// }

// Ex2:- Replace All Occurrences of a Character in a String
// function replaceAllStr(){
//     const sentence = prompt("Enter the sentence...")
//     const replaced = sentence.replaceAll("red","blue")
//     console.log(replaced)
// } 
// replaceAllStr()

// Ex3: Replace Character of a String Using RegEx
function replaceStr(){
    const sentence = prompt("Enter the sentence...")
    // const regex = /red/g -- case sensitive
    const regex = /red/gi // -- case insensitive
    const replaced = sentence.replace(regex,"blue")
    console.log(replaced)
}

replaceStr()