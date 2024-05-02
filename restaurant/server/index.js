const express = require("express")
const app = express()
const mongoose = require("mongoose")
const cors = require("cors")

const dotenv = require("dotenv").config()

const authRoutes = require("./routes/auth.js")

app.use(cors());
app.use(express.json());
app.use(express.static('public'));

app.use("/auth",authRoutes)

const PORT = 4001;
mongoose
 .connect(process.env.MONGO_URL,{
   dbName: "Charans_Restaurant",
 })
 .then(()=>{
    app.listen(PORT,() => {
        console.log(`Server Port : ${PORT}`);
    })
 }).catch((err) => {
    console.log(`${err} did not connect`);
 });
