const express = require("express")
const app = express()

const mainRoute = require("./routes/main.js")
const userRoute = require("./routes/users.js")

const path = require("path")

app.use(express.static(path.join(__dirname,"public")))

app.use(userRoute)

app.use(mainRoute)

app.listen(3000)

