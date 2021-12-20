import express from 'express';
import { registerUser, loginUser, getSubjects, getTests } from '../controllers/userController.js';
import { protectRoute } from '../middleware/authMiddleware.js';

const userRoute = express.Router();

userRoute.post('/register',registerUser);
userRoute.get('/login',loginUser);
userRoute.get('/subjects',protectRoute, getSubjects);
userRoute.get('/tests',protectRoute,getTests);

export default userRoute;