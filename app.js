import express from "express"
import router from "./routes/routes.js"

const app = express()

app.use("/ai", router)

app.get("/home" , (req ,res)=>{
    res.send("home page")
})

export default app