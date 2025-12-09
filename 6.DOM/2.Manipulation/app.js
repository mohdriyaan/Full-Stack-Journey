// const h1 = document.querySelector("h1")

// console.log(h1.innerText) 
// // h1.innerText = "Hellowd"
// // console.log(h1.innerText)

// console.log(document.querySelector("p").innerText)

// console.log(document.querySelector("p").textContent)

// const allLinks = document.querySelectorAll("a")

// for(let links of allLinks){
//     links.innerText="I AM A LINK"
// }

// document.querySelector("h1").innerHTML="<i>Hello World</i>"
// document.querySelector("h1").innerHTML+="<sup>2</sup>"

// // Attributes
// // document.querySelector("#banner").id = "whoops"
// console.log(document.querySelector(`#banner`).src)

// const firstLink = document.querySelector("a")
// console.log(firstLink.href)
// console.log(firstLink.title)

// console.log(firstLink.getAttribute("href"))

// const input = document.querySelector(`input[type="text"]`)
// console.log(input.type)
// input.type = "password"
// input.setAttribute("type","text")

// Changing styles
// const h1 = document.querySelector("h1")
// h1.style.color="red"
// h1.style.fontSize ="3em"
// h1.style.border = "2px solid pink"

// const allLinks = document.querySelectorAll("a")

// for(let links of allLinks){
//     links.style.color = "green"
//     links.style.textDecorationStyle="wavy"
//     links.style.textDecorationColor="magenta"
// }

// Class List

// const h2 = document.querySelector("h2")
// h2.classList.add("purple")
// h2.classList.add("border")
// h2.classList.remove("border")
// // test
// h2.classList.contains("border")
// console.log(h2.getAttribute("class"))

// Traversing Parent/Child/Sibling
// const firstBold = document.querySelector("b")
// console.log(firstBold.parentElement) // gives paragraph element
// console.log(firstBold.parentElement.parentElement) // gives body
// console.log(firstBold.parentElement.parentElement.parentElement) // gives html element

// const paragraph= firstBold.parentElement
// console.log(paragraph.children) // gives array of child elements in the paragraph 

// console.log(paragraph.children[0])

// const squareImg = document.querySelector(".square")

// console.log(squareImg.nextElementSibling) // gives next adjacent element

// console.log(squareImg.previousElementSibling) // gives previous adjacent element

// // creating element
// const newImg = document.createElement("img")
// newImg.src = "https://upload.wikimedia.org/wikipedia/commons/thumb/7/75/Partridge_Silkie_hen.jpg/900px-Partridge_Silkie_hen.jpg"
// document.body.appendChild(newImg) // append this as the last child of the body
// newImg.classList.add("square")

// const newH3 = document.createElement("h3")
// newH3.innerText="I am new!"
// document.body.appendChild(newH3)

// const p = document.querySelector("p")
// p.append("I am new text!!!!","jbdxhevdjxvjhewvdjh")
// const newB = document.createElement("b")
// newB.append("HI!")
// p.prepend(newB)

// const h2 = document.createElement("h2")
// h2.append("Are adorable chickens!!")
// document.querySelector("h1").insertAdjacentElement("afterend",h2)

// const h3 = document.createElement("h3")
// h3.innerText="I am h3!"
// h2.after(h3)

// Remove Child
const firstLi = document.querySelector("li")
const ul = firstLi.parentElement
ul.removeChild(firstLi)

const img = document.querySelectorAll(".square") 
img[1].remove()


