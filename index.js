import app from "./app.js";
import dotenv from "dotenv"
dotenv.config({path : "./.env"})

const Port = process.env.PORT || 8000
app.listen(3000 , ()=>{
    console.log(`server run on ${Port}`)
})