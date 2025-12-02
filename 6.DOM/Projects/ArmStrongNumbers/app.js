const min = document.querySelector("#minNumber");
const max = document.querySelector("#maxNumber");
const submit = document.querySelector("#submit");
const output = document.querySelector("#output");


const toggle = document.getElementById("toggleMode");

toggle.addEventListener("change", () => {
    document.body.classList.toggle("dark");
});


[min, max].forEach((field) => {
    field.addEventListener("input", () => {
        if (field.value == "") {
            output.value = ""
        }
    })

})

submit.addEventListener("click", armStrong)

function armStrong(e) {
    e.preventDefault()
    const minValue = Number(min.value)
    const maxValue = Number(max.value)
    if (isNaN(minValue) || isNaN(maxValue) || maxValue < minValue) {
        output.value = "Invalid Range of number. Please enter again."
        return
    }
    let temp, numbers = []
    for (let i = minValue; i <= maxValue; i++) {
        let numberDigits = i.toString().length
        let sum = 0
        temp = i

        while (temp > 0) {
            let remainder = temp % 10
            sum += remainder ** numberDigits
            temp = Math.floor(temp / 10)
        }
        if (sum == i) {
            numbers.push(i)
        }
    }

    if (numbers.length == 0) {
        output.value = "No Armstrong Numbers Found"
        return
    }
    output.value = numbers.join(", ")

}


