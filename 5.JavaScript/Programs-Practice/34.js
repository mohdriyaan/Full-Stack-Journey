// JavaScript Program to Sort Words in Alphabetical Order
function sortAlphabets(){
    const sentence = prompt("Enter the sentence: ")
    const splits = sentence.split(" ")
    splits.sort()
    const sortedSentence = splits.join(" ")
    // for(let sortedSentence of splits){
    console.log(sortedSentence)
    // }
}

sortAlphabets()

// when we use the sort() method, uppercase letters are placed before lowercase.
