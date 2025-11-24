// JavaScript Program to Convert Objects to Strings

const obj = {
    name: "Riyaan",
    age: 21
}

// const convert = JSON.stringify(obj)
// console.log(convert,typeof(convert))

const convert = String(obj)
console.log(convert, typeof(convert), String(obj.name))



