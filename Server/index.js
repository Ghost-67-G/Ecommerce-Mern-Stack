const express = require("express")
const app = express()

app.use(express.json())
require("./db/db")




app.listen(process.env.PORT||2700,()=>{
    console.log("Server is running on Port: 2700");
})