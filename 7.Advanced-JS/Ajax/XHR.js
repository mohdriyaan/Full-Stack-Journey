// XHR - XMLHttpRequest
/*
-> the original way of sending requests via JS.
-> does not support promises, so lots of callbacks
-> clunky syntax, difficult to remember.
*/

const req = new XMLHttpRequest()

req.onload = function(){
    console.log("It worked!!")
    const data = JSON.parse(this.responseText)
    console.log(data.name)
    console.log(data.name.height)
}

req.onerror = function(){
    console.log("ERROR!!")
    console.log(this)
}
req.open("GET","https://swapi.dev/api/people/1")
req.send()

// "https://swapi.dev/api/people/1"