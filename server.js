import express from 'express';
import dotenv from 'dotenv';
import userRoute from "./routes/userRoutes.js";
import mongoose from "mongoose"
import { notFound,errorHandler } from "./middleware/errorMiddleware.js";
import adminRoute from './routes/adminRoutes.js';
dotenv.config();

const app = express();

app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "http://localhost:3000"); // update to match the domain you will make the request from
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
  });
app.use(express.json())
app.use(express.urlencoded({
    extended:true
}))
app.use("/admin",adminRoute)
app.use("/users",userRoute)

app.use(notFound)

app.use(errorHandler)



const port = process.env.PORT || 8080;

mongoose
.connect(
    process.env.MONGO_URI,
    {
        useUnifiedTopology: true,
        useNewUrlParser: true,
    }
)
.then(()=>console.log("Connected to Atlas"))
.catch((err)=>console.log(`Error at Atlas connection ${err}`));

app.listen(port,()=>{
    console.log(`Server running on port: ${port}`);
})