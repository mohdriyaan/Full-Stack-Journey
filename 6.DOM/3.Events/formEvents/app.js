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



const list1 = document.querySelector("#tweets")
const input1 = document.querySelector("#username")
const input2 = document.querySelector("#tweet")
const form1 = document.querySelector("#dogs")
form1.addEventListener("submit",function(e){
    e.preventDefault()
    const username = input1.value
    const tweet = input2.value
    const newLi = document.createElement("li")
    const b = document.createElement("b")
    b.append(username)
    newLi.append(b)
    newLi.append(`- ${tweet}`)
    list1.append(newLi)
    input1.value=""
    input2.value=""
})



