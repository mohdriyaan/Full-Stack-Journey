function palindrome(str){
    const arrStr = str.split("")
    // console.log(arrStr)
    const revArr = arrStr.reverse()
    // console.log(revArr)
    const revStr = revArr.join("")
    // console.log(revStr)
    if(revStr===str){
        return `${str} is a palindrome`
    }
    return `${str} is not a palindrome`
}

console.log(palindrome("dad"))