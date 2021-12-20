import express from "express";
import { loginUser,registerUser } from "../controllers/userController.js";

const adminRoute = express.Router();

adminRoute.post("/register",registerUser);
adminRoute.get("/login",loginUser);

export default adminRoute;