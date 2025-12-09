const input1 = document.querySelector("#input1");
const input2 = document.querySelector("#input2");
const input3 = document.querySelector("#input3");
const button = document.querySelector("#btn");
const output = document.querySelector("#output");

button.addEventListener("click", function (e) {
    e.preventDefault();

    const numbers = [input1.value, input2.value, input3.value].map(Number);

    // Check for invalid entries
    if (numbers.some(isNaN)) {
        output.value = "Invalid input. Please enter only numbers.";
        return;
    }

    const maxValue = Math.max(...numbers);
    output.value = maxValue;
});
