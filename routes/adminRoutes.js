import express from "express";
import { getProfile, getSubjects, getTests, loginUser, registerUser } from "../controllers/userController.js";
import { createTest, createSubject, getMarks, getIssues } from "../controllers/adminController.js";
import { protectAdminRoute } from "../middleware/authMiddleware.js";

const adminRoute = express.Router();

adminRoute.post("/register", registerUser);
adminRoute.get("/login", loginUser);
adminRoute.get("/getSubjects", protectAdminRoute, getSubjects);
adminRoute.post("/getTests", protectAdminRoute, getTests);
adminRoute.post("/createTest", protectAdminRoute, createTest);
adminRoute.post("/createSubject", protectAdminRoute, createSubject);
adminRoute.post("/getMarks",protectAdminRoute,getMarks);
adminRoute.post("/profile",protectAdminRoute,getProfile)
adminRoute.get("/issues",protectAdminRoute,getIssues);
export default adminRoute;
