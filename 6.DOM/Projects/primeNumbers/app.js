const min = document.querySelector("#lowRange")
const max = document.querySelector("#highRange")
const submit = document.querySelector("#btn")
const output = document.querySelector("#output")

min.addEventListener("input", () => output.value = "");
max.addEventListener("input", () => output.value = "");
submit.addEventListener("click",primeNumbers)


function primeNumbers(e){
    e.preventDefault()
    const minValue = Number(min.value)
    const maxValue = Number(max.value)
    const numbers = []
    if(isNaN(minValue)||isNaN(maxValue)||maxValue<minValue){
        output.value = `Invalid range of numbers`
        return
    }
    for(let i = minValue; i<= maxValue; i++){
        let isPrime = true
        for(let j = 2; j<=i/2;j++){
            if(i%j==0){
                isPrime= false
                break;
            }
        }
        if(isPrime&&i>1){
            numbers.push(i)
        }
    }
    if(numbers.length==0){
        output.value = `Prime numbers not found`
        return
    }
    output.value = numbers.join(", ")
}