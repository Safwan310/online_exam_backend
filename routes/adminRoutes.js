import express from "express";
import { getProfile, getSubjects, getTests, loginUser, registerUser } from "../controllers/userController.js";
import { createTest, createSubject, getMarks } from "../controllers/adminController.js";
import { protectRoute } from "../middleware/authMiddleware.js";

const adminRoute = express.Router();

adminRoute.post("/register", registerUser);
adminRoute.get("/login", loginUser);
adminRoute.get("/getSubjects", protectRoute, getSubjects);
adminRoute.post("/getTests", protectRoute, getTests);
adminRoute.post("/createTest", protectRoute, createTest);
adminRoute.post("/createSubject", protectRoute, createSubject);
adminRoute.post("/getMarks",protectRoute,getMarks);
adminRoute.post("/profile",protectRoute,getProfile)
export default adminRoute;
