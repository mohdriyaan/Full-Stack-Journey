// Core Modules in NodeJS

/*
http:- Launch a server, send requests
https:- Launch a SSL server
fs 
path
os
*/

const http = require("http")
const routes = require("./routes")
// Custom Function
// function reqListener(req,res){

// }

const server = http.createServer(routes.handler)
    // process.exit() // exits the event loop of nodejs)

// NodeJS Program LifeCycle
/*
node app.js -> Start Script -> Parse Code, Register Cariables and functions -> Event Loop (Keep on running as long as there are event listeners registered) -> process.exit
*/

server.listen(3000)

