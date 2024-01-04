import express from "express"
const app = express()
import dontenv from "dotenv"
import mongoose from "mongoose"
import authRoute from "./routes/auth.js"
import hotelsRoute from "./routes/hotels.js"
import roomsRoute from "./routes/rooms.js"
import usersRoute from "./routes/users.js"
import cookieParser from "cookie-parser"

dontenv.config()

const connect = async () => {

try{
    await mongoose.connect(process.env.MONGO);
    console.log("connected to mongodb")
} catch (error) {
    throw error;
}
};


app.get("/", (req,res)=> {
    res.send("hello first request");
})

//Middlewares
app.use(express.json())
app.use(cookieParser())

app.use("/auth", authRoute);
app.use("/users", usersRoute);
app.use("/hotels", hotelsRoute);
app.use("/rooms", roomsRoute);

app.use((err,req,res,next) => {
    const errorStatus = err.status || 500
    const errorMessage = err.message || "Something went wrong!"
   return res.status(errorStatus).json({
    success:false,
    status:errorStatus,
    message:errorMessage,
    stack:err.stack,
   })
})


app.listen(8800, ()=> {
    connect()
    console.log("Connected to backend")
})