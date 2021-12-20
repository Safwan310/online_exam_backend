import express from 'express';
import dotenv from 'dotenv';
import userRoute from "./routes/userRoutes.js";
import mongoose from "mongoose"
import { notFound,errorHandler } from "./middleware/errorMiddleware.js";
import adminRoute from './routes/adminRoutes.js';
import cors from "cors";
dotenv.config();

const app = express();
const router = express.Router();

app.use(cors())
app.use(express.json())
app.use(express.urlencoded({
    extended:true
}))

router.get("/", (req, res) => {
    res.setHeader("Access-Control-Allow-Origin", "*")
    res.setHeader("Access-Control-Allow-Credentials", "true");
    res.setHeader("Access-Control-Max-Age", "1800");
    res.setHeader("Access-Control-Allow-Headers", "content-type");
    res.setHeader( "Access-Control-Allow-Methods", "PUT, POST, GET, DELETE, PATCH, OPTIONS" ); 
});

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