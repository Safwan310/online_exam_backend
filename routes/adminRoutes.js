import express from "express";
import { loginUser, registerUser } from "../controllers/userController.js";

const adminController = require('./../controllers/adminController');

const adminRoute = express.Router();

adminRoute.post("/createTests", adminController.createTests);
adminRoute.post("/createSubjects", adminController.createSubject);

adminRoute.post("/register", registerUser);
adminRoute.get("/login", loginUser);

export default adminRoute;
