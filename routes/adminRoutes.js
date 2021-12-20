import express from "express";
import { getSubjects, getTests, loginUser, registerUser } from "../controllers/userController.js";
import { createTest,createSubject } from "../controllers/adminController.js";
import { protectRoute } from "../middleware/authMiddleware.js";

const adminRoute = express.Router();

adminRoute.post("/register", registerUser);
adminRoute.get("/login", loginUser);
adminRoute.get("/getSubjects",protectRoute,getSubjects);
adminRoute.get("/getTests",protectRoute, getTests);
adminRoute.post("/createTest",protectRoute,createTest);
adminRoute.post("/createSubject",protectRoute,createSubject);

export default adminRoute;
