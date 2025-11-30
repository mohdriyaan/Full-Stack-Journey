// AJAX
/*
A - Asynchronous
J - JavaScript
A - And
X - XML

AJAX is a technique used in web development that allows a webpage to update data without reloading the entire page.

It makes websites faster, smoother, and more interactive, like:
--> Searching suggestions appearing as you type
--> Submitting a form without refresh
--> Live updating dashboards
--> Loading more posts without reloading (infinite scroll)

How it works:-
1. Your JavaScript code sends a request to a server in the background.
2. The server sends back data (JSON most commonly today).
3. JavaScript updates the webpage dynamically using this data.
4. The user experiences all this without a page refresh.
*/

// API  :- Application Programming Interface
/* 
An API is a set of rules that allows two software programs to talk to each other.
APIs help different systems communicate.

Example:

--> Your app requests weather data → API sends back temperature, humidity, etc.

--> Online payment → API sends payment details to the bank and returns response.

--> Logging in via Google → Google API sends user info back to your app.
*/

// Web API's :- A Web API is an API that works specifically over the internet using HTTP/HTTPS.
/* 
It allows a browser or an app to get/send data to a server.

Example of Web APIs:

REST APIs

GraphQL APIs

JSON APIs

Twitter API

YouTube API

These return data usually in JSON format.

*/

// JSON - Java Script Object Notation
/*
It is a lightweight, text-based format used to store and send data.

Why JSON is used:-
Because, 
✔ Easy to read

✔ Easy to write

✔ Works with almost every programming language

✔ Perfect for sending data through APIs

JSON rules:-

1. Uses key–value pairs
   "key": value

2. Keys must be in double quotes
    "name" ✔
    'name' ❌
    name ❌

3. Values can be:
--> string ("hello")
--> number (25)
--> boolean (true/false)
--> array ([])
--> object ({})
--> null

4. No comments allowed
// comment ❌

5. Everything must use double quotes — no single quotes.
*/

let data = `{"ticker":{"base":"BTC","target":"USD","price":"11203.95559309"}}`

// Converting JSON to object
console.log(JSON.parse(data))
data = JSON.parse(data)
const tickerData = data.ticker
const price = tickerData.price
console.log(Number(price).toPrecision(7))

// Converting object to JSON
const dog = {
    breed:"lab",
    color:"black",
    isAlive:true,
    owner:undefined
}

console.log(JSON.stringify(dog))

