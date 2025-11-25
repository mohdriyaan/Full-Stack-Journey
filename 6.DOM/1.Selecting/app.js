// Selecting

// 1. document.getElementById
const banner = document.getElementById("banner")
console.dir(banner)

// 2. document.getElementsByTagName
const allImages = document.getElementsByTagName("IMG")
console.dir(allImages)
console.log(allImages)
console.dir(allImages.length)
for(let img of allImages){
    console.log(img.src)
}

console.log(document.getElementsByTagName("p"))



// 3. document.getElementsByClassName
console.log(document.getElementsByClassName("square"))
const squareImages = document.getElementsByClassName("square")

for(let img of squareImages){
    img.src=""
}

// 4. document.querySelector(element)

console.log(document.querySelector("p")) // Gives only the first match element
console.log(document.querySelector("#banner"))
console.log(document.querySelector(".square"))

console.log(document.querySelector(`a[title="Java"]`))

console.log(document.querySelectorAll("p")) // Gives all matching paragraphs in object
console.log(document.querySelectorAll("p a"))

const linksInsideP = document.querySelectorAll("p a")
for(let links of linksInsideP){
    console.log(links.htef)
}


