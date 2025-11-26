const form = document.querySelector("#shelter-form")
const input = document.querySelector("#catName")
const list = document.querySelector("#cats")
form.addEventListener("submit",function(e){
    e.preventDefault();
    // console.log(input.value)
    const catName = input.value
    const newLi = document.createElement("li")
    newLi.innerText= catName
    list.append(newLi)
    input.value=""
})