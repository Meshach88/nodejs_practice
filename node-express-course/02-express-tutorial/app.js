const express = require("express")
const app = express()

app.use(express.static("./methods-public"))

app.listen(5000, ()=>{
    console.log("Server running at port 5000.....")
})