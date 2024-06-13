const express = require("express")
const app = express()

require("dotenv").config()
const PORT = process.env.PORT || 4001

// middleware to parse json request body 
app.use(express.json())

// import routes for todoapi
const blog = require("./routes/todo")

// mount the todo api route 

app.use("/api/v1", blog)

// start server 
app.listen(PORT, () => {
        console.log(`server started at ${PORT}`)
})

// connect database 
const dbConnect = require("./config/database")
dbConnect();

// default route 
