import express from "express"

const app = express()

app.get("/home" , (req ,res)=>{
    res.send("home page")
})

export default app