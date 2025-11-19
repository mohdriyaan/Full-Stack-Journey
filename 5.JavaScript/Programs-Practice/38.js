// JavaScript Program to Check the Number of Occurrences of a Character in the String
// Example 1: Check Occurrence of a Character Using for Loop
// function count(str,char){
//     let count = 0
//     for(let i = 0 ; i<=str.length-1 ; i++){
//         if(str[i]==char){
//             count++
//         }
//     }
//     console.log(count)
// }

// Check occurrence of a character using a Regex
function count(str,char){
    const reg = new RegExp(char, "g") // "g" means global search and not just first match
    const occurences = str.match(reg).length
    // The match() method returns an array containing all the matches. Here, str.match(re);gives ["o", "o"].
    console.log(occurences)
}
count("hello","i")


