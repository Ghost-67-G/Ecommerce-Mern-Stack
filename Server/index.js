const express = require("express")
const app = express()
const  userRoutes = require("./Routes/User")

app.use(express.json())



app.use(userRoutes)
require("./db/db")

app.listen(process.env.PORT||2700,()=>{
    console.log("Server is running on Port: 2700");
})