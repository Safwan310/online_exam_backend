import express from 'express';
import { registerUser, loginUser, getSubjects, getTests, getIndividualTest } from '../controllers/userController.js';
import { protectRoute } from '../middleware/authMiddleware.js';

const userRoute = express.Router();

userRoute.post('/register',registerUser);
userRoute.post('/login',loginUser);
userRoute.get('/subjects',protectRoute, getSubjects);
userRoute.post('/tests',protectRoute,getTests);
userRoute.post('/test',protectRoute,getIndividualTest);

export default userRoute;