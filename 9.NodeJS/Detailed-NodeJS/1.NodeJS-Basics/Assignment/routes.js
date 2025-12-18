const fs = require("fs")

const requestHandler = (req, res) => {
    const url = req.url
    const method = req.method
    if (url === "/") {
        res.write("<html>")
        res.write("<head><title>Form Page</title></head>")
        res.write(`
            <body>
                <form action = "/create-user" method = "POST">
                    <input type="text" name="username"/>
                    <button>Submit</button>
                </form>
            </body>
        `)
        res.write("</html>")
        return res.end()
    }

    if(url === "/create-user" && method === "POST"){
        const body = []
        req.on("data",(chunk)=>{
            body.push(chunk)
        })
        return req.on("end",()=>{
            const parsedBody = Buffer.concat(body).toString()
            const username = parsedBody.split("=")[1]
            console.log(username)
            res.statusCode = 302
            res.setHeader("Location","/")
            return res.end();
        })
    }

    if(url === "/users"){
        res.write("<html>")
        res.write("<head><title>List Of Users</title></head>")
        res.write(`
            <body>
                <ul>
                    <li>User 1</li>
                    <li>User 2</li>
                </ul>
            </body>
        `)
        res.write("</html>")
        return res.end()    
    }


    res.setHeader("Content-Type", "text/html")
    res.write("<html>")
    res.write("<head><title>Greeting Page</title></head>")
    res.write("<body><h1>Welcome to the Greeting Page</h1></body>")
    res.write("</html>")
    res.end()
}

exports.handler = requestHandler
