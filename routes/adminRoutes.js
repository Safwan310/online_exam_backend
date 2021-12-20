import express from "express";
import { loginUser, registerUser } from "../controllers/userController.js";
import { createTest,createSubject } from "../controllers/adminController.js";

const adminRoute = express.Router();

adminRoute.post("/register", registerUser);
adminRoute.get("/login", loginUser);
adminRoute.post("/createTest",createTest);
adminRoute.post("/createSubject",createSubject);

export default adminRoute;
