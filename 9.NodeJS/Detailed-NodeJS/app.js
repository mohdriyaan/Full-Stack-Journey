// Core Modules in NodeJS

/*
http:- Launch a server, send requests
https:- Launch a SSL server
fs 
path
os
*/

const http = require("http")
const fs = require("fs")

// Custom Function
// function reqListener(req,res){

// }

const server = http.createServer((req, res) => {
    // console.log(req.url,req.method,req.headers)
    // process.exit() // exits the event loop of nodejs
    const url = req.url

    const method = req.method

    if (url === "/") {
        res.write("<html>")
        res.write("<head><title>Enter Message</title></head>")
        res.write('<body><form action="/message" method="POST"><input type="text" name="message"><button type="submit">Send</button></form></body>')
        res.write("</html>")
        return res.end()
    }
    
    if(url === "/message" && method === "POST"){
        const body = []
        req.on("data",(chunk)=>{
            // console.log(chunk)
            body.push(chunk)
        })
        return req.on("end",()=>{
            const parsedBody = Buffer.concat(body).toString()
            // console.log(parsedBody)
            const message = parsedBody.split("=")[1]
            fs.writeFileSync("message.txt",message)
            res.statusCode = 302;
            res.setHeader("Location","/")
            return res.end()
        })
        // fs.writeFileSync("message.txt","DUMMY")
        // res.statusCode = 302;
        // res.setHeader("Location","/")
        // return res.end()
    }
    res.setHeader("Content-Type", "text/html")
    res.write("<html>")
    res.write("<head><title>My First Page</title></head>")
    res.write("<body><h1>Hello from NodeJS Server!</h1></body>")
    res.write("</html>")
    res.end()

})

server.listen(3000)

// NodeJS Program LifeCycle
/*
node app.js -> Start Script -> Parse Code, Register Cariables and functions -> Event Loop (Keep on running as long as there are event listeners registered) -> process.exit
*/

