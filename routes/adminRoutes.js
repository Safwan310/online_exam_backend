import express from "express";
import { getSubjects, getTests, loginUser, registerUser } from "../controllers/userController.js";
import { createTest, createSubject, getMarks } from "../controllers/adminController.js";
import { protectRoute } from "../middleware/authMiddleware.js";
import { getFeedback } from "../controllers/feedbackController.js";

const adminRoute = express.Router();

adminRoute.post("/register", registerUser);
adminRoute.get("/login", loginUser);
adminRoute.get("/getSubjects", protectRoute, getSubjects);
adminRoute.post("/getTests", protectRoute, getTests);
adminRoute.post("/createTest", protectRoute, createTest);
adminRoute.post("/createSubject", protectRoute, createSubject);
adminRoute.get("/getFeedback", protectRoute, getFeedback);
adminRoute.post("/getMarks",protectRoute,getMarks);
export default adminRoute;
