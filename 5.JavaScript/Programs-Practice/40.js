// Count the Number of Vowels Using for Loop
// const vowels = ["a","e","i","o","u"]

// function checkVowels(str){
//     let count = 0
//     for(let letters of str.toLowerCase()){
//         if(vowels.includes(letters)){
//             count++
//         }
//     }

//     console.log(`The no of vowels in ${str} is ${count}`)
// }

// Count the Number of Vowels Using Regex
function checkVowels(str){
    const count = str.match(/[aeiou]/gi).length
    return count
}

console.log(checkVowels("hEllo"))